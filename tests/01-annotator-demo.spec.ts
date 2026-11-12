import { test as base, expect } from "@playwright/test";
import { AnnotatorDemo, SAMPLE_ANNOTATIONS } from "./support/annotator-demo";

const test = base.extend<{ demo: AnnotatorDemo }>({
  demo: async ({ page }, use) => {
    const demo = new AnnotatorDemo(page);
    await demo.goto();
    await use(demo);
  },
});

const withoutAnnotation = (text: string) => SAMPLE_ANNOTATIONS.filter((a) => a.text !== text);

test.describe("Annotator demo", () => {
  test("loads the GDPR Art. 17 sample", async ({ demo }) => {
    await expect(demo.root.getByText("GDPR Article 17 — Right to erasure")).toBeVisible();
    await expect(demo.root.locator(".label__name")).toHaveText(["Duty", "Condition", "Exception"]);
    await demo.expectSampleState();
    expect(await demo.readDraft()).toBeNull();
  });

  test.describe("reset", () => {
    test("restores a deleted annotation and its highlight", async ({ demo }) => {
      const target = SAMPLE_ANNOTATIONS[2].text;

      await demo.deleteAnnotation(target);
      await demo.expectAnnotations(withoutAnnotation(target));

      await demo.reset();
      await demo.expectSampleState();
    });

    test("restores a deleted relation", async ({ demo }) => {
      await demo.deleteFirstRelation();
      await expect(demo.relationsHeading).toHaveText("Relations (0)");
      await expect(demo.relationItems).toHaveCount(0);

      await demo.reset();
      await demo.expectSampleState();
    });

    test("removes an annotation the visitor added", async ({ demo }) => {
      await demo.annotate("unlawfully processed", "Exception");
      await expect(demo.annotationsHeading).toHaveText(`Annotations (${SAMPLE_ANNOTATIONS.length + 1})`);
      await expect(demo.annotationItems.last().locator(".region__label")).toHaveText("Exception");
      await expect(demo.annotationItems.last().locator(".region__text")).toContainText("unlawfully processed");

      await demo.reset();
      await demo.expectSampleState();
    });

    test("restores everything after several edits", async ({ demo }) => {
      await demo.deleteFirstRelation();
      for (const { text } of SAMPLE_ANNOTATIONS) await demo.deleteAnnotation(text);
      await demo.annotate("unlawfully processed", "Duty");
      await expect(demo.annotationsHeading).toHaveText("Annotations (1)");

      await demo.reset();
      await demo.expectSampleState();
    });

    // Regression: the sample assignment used to be mutated in place by the kit,
    // so after a reset, further edits leaked into the "fresh" sample.
    test("works repeatedly", async ({ demo }) => {
      for (const { text } of SAMPLE_ANNOTATIONS.slice(0, 3)) {
        await demo.deleteAnnotation(text);
        await demo.expectAnnotations(withoutAnnotation(text));

        await demo.reset();
        await demo.expectSampleState();
      }
    });
  });

  test.describe("draft persistence", () => {
    test("keeps edits across a reload", async ({ demo, page }) => {
      const target = SAMPLE_ANNOTATIONS[0].text;
      await demo.deleteAnnotation(target);
      await expect.poll(() => demo.readDraft()).not.toBeNull();

      await page.reload();
      await expect(demo.annotationsHeading).toBeVisible();
      await demo.expectAnnotations(withoutAnnotation(target));
    });

    test("reset discards the saved draft", async ({ demo, page }) => {
      await demo.deleteAnnotation(SAMPLE_ANNOTATIONS[0].text);
      await expect.poll(() => demo.readDraft()).not.toBeNull();

      await demo.reset();
      await demo.expectSampleState();

      await page.reload();
      await expect(demo.annotationsHeading).toBeVisible();
      await demo.expectSampleState();
    });
  });
});

test.describe("Annotator demo on mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("is hidden on small screens", async ({ page }) => {
    await page.goto("/");
    const demo = new AnnotatorDemo(page);
    await expect(demo.resetButton).toBeHidden();
    await expect(demo.root).toBeHidden();
  });
});
