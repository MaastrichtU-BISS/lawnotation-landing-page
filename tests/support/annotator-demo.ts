import { expect, type Locator, type Page } from "@playwright/test";

export type LabelName = "Duty" | "Condition" | "Exception";

export interface ExpectedAnnotation {
  label: LabelName;
  text: string;
}

/** Storage key the kit uses for in-progress edits (see AnnotatorDemo.vue). */
export const DRAFT_KEY = "lak:draft:assignment:gdpr-art17-demo";

/** The sample annotations shipped with the demo, in display order. */
export const SAMPLE_ANNOTATIONS: readonly ExpectedAnnotation[] = [
  { label: "Duty", text: "shall have the obligation to erase personal data" },
  { label: "Condition", text: "where one of the following grounds applies" },
  { label: "Condition", text: "withdraws consent" },
  { label: "Duty", text: "shall take reasonable steps" },
  { label: "Exception", text: "shall not apply to the extent that processing is necessary" },
];

const LABEL_SHORTCUTS: Record<LabelName, string> = { Duty: "1", Condition: "2", Exception: "3" };

/** Page object for the "Try the annotator" section on the landing page. */
export class AnnotatorDemo {
  readonly root: Locator;
  readonly resetButton: Locator;
  readonly documentText: Locator;
  readonly marks: Locator;
  readonly annotationsHeading: Locator;
  readonly annotationItems: Locator;
  readonly relationsHeading: Locator;
  readonly relationItems: Locator;

  constructor(private readonly page: Page) {
    this.root = page.getByRole("region", { name: "Interactive annotation demo" });
    this.resetButton = page.getByRole("button", { name: "Reset demo" });
    this.documentText = this.root.locator(".document__text");
    this.marks = this.documentText.locator("mark");
    this.annotationsHeading = this.root.getByRole("heading", { name: /^Annotations \(\d+\)$/ });
    this.annotationItems = this.root.locator(".regions > li");
    this.relationsHeading = this.root.getByRole("heading", { name: /^Relations \(\d+\)$/ });
    // The list renders a "No relations yet." placeholder <li> when empty.
    this.relationItems = this.root.locator(".rel-list > li.rel");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
    // The demo is an async component that mounts client-side; wait for the kit.
    await expect(this.annotationsHeading).toBeVisible();
  }

  annotation(text: string): Locator {
    return this.annotationItems.filter({ has: this.page.locator(".region__text", { hasText: text }) });
  }

  async deleteAnnotation(text: string): Promise<void> {
    await this.annotation(text).getByTitle("Delete", { exact: true }).click();
  }

  async deleteFirstRelation(): Promise<void> {
    await this.relationItems.first().getByTitle("Delete relation").click();
  }

  async reset(): Promise<void> {
    await this.resetButton.click();
  }

  /** Creates an annotation the way a visitor would: label shortcut, then drag-select the phrase. */
  async annotate(phrase: string, label: LabelName): Promise<void> {
    await this.page.keyboard.press(LABEL_SHORTCUTS[label]);

    const box = await this.documentText.evaluate((el, target) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const index = node.textContent?.indexOf(target) ?? -1;
        if (index === -1) continue;
        // "instant": the site sets scroll-behavior: smooth, which would move the text mid-drag.
        node.parentElement?.scrollIntoView({ block: "center", behavior: "instant" });
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + target.length);
        const rects = range.getClientRects();
        const first = rects[0];
        const last = rects[rects.length - 1];
        return {
          startX: first.left + 1,
          startY: first.top + first.height / 2,
          endX: last.right - 1,
          endY: last.top + last.height / 2,
        };
      }
      return null;
    }, phrase);
    if (!box) throw new Error(`Phrase not found in the document: "${phrase}"`);

    await this.page.mouse.move(box.startX, box.startY);
    await this.page.mouse.down();
    await this.page.mouse.move(box.endX, box.endY, { steps: 5 });
    await this.page.mouse.up();
  }

  async readDraft(): Promise<string | null> {
    return this.page.evaluate((key) => localStorage.getItem(key), DRAFT_KEY);
  }

  /** Asserts the full annotation list (label + text, in order) and the matching highlights. */
  async expectAnnotations(expected: readonly ExpectedAnnotation[]): Promise<void> {
    await expect(this.annotationsHeading).toHaveText(`Annotations (${expected.length})`);
    await expect(this.annotationItems.locator(".region__label")).toHaveText(expected.map((a) => a.label));
    await expect(this.annotationItems.locator(".region__text")).toHaveText(expected.map((a) => a.text));
    await expect(this.marks).toHaveText(expected.map((a) => a.text));
  }

  /** Asserts the demo is exactly the shipped sample: 5 annotations and the "Depends on" relation 1 → 2. */
  async expectSampleState(): Promise<void> {
    await this.expectAnnotations(SAMPLE_ANNOTATIONS);
    await expect(this.relationsHeading).toHaveText("Relations (1)");
    await expect(this.relationItems).toHaveCount(1);
    await expect(this.relationItems.first().locator(".rel__end")).toHaveText(["1", "2"]);
    await expect(this.relationItems.first().locator(".chip")).toContainText("Depends on");
  }
}
