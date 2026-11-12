# tests/support

This folder holds shared helper code for the Playwright end-to-end tests. Files in
here are **not tests**. Playwright only runs files that end in `.spec.ts`, so it
skips this folder.

## Why this folder exists

The test files (`tests/NN-name.spec.ts`) should say *what* is tested, not *how* the
page is put together. All the knowledge about how the page works lives here instead:

- **CSS selectors and roles**, for example `.regions > li` or `.rel-list > li.rel`
- **User actions**, for example deleting an annotation, pressing Reset, or
  annotating text with a label shortcut and a mouse drag
- **Expected data**, for example the 5 sample annotations from GDPR Article 17
- **Shared assertions**, for example "the demo looks exactly like the shipped
  sample"

This has three benefits:

1. **One place to fix.** If `legal-annotation-kit` changes its HTML in an update,
   you only update the selectors here, not in every test.
2. **Readable tests.** A test reads like a scenario:
   `deleteAnnotation(...)` → `reset()` → `expectSampleState()`.
3. **Reuse.** New spec files can import the same helpers instead of copying them.

This setup is known as the *Page Object Model*, the pattern the Playwright
documentation recommends: <https://playwright.dev/docs/pom>

## Contents

| File | What it contains |
|---|---|
| `annotator-demo.ts` | The `AnnotatorDemo` class for the "Try the annotator" section, the `SAMPLE_ANNOTATIONS` data and the `DRAFT_KEY` localStorage key |

## Conventions

- Spec files go directly in `tests/` and get a number prefix:
  `01-annotator-demo.spec.ts`, `02-agreement-lab.spec.ts`, … The number keeps the
  files in a fixed order in your editor and in the test report. It does **not**
  decide the run order, because tests run in parallel and each one starts in a
  fresh browser.
- Each page section gets its own helper file here, named after the section
  (`annotator-demo.ts` ↔ `AnnotatorDemo.vue`).
- Helpers are written in TypeScript and import only from `@playwright/test`.
