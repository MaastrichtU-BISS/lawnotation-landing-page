<template>
  <div class="card overflow-hidden" v-reveal>
    <div class="flex flex-wrap items-end justify-between gap-4 border-b border-slate-200/80 bg-gradient-to-r from-secondary-light/70 via-white to-beige/70 px-6 py-6 sm:px-10">
      <div>
        <p class="eyebrow">Live demo · legal-annotation-kit</p>
        <h3 class="mt-2 font-slab text-2xl font-medium tracking-tight">Try the annotator</h3>
        <p class="mt-2 max-w-2xl text-sm leading-relaxed">
          This is the real annotation interface from Lawnotation provided by the
          <a href="https://www.npmjs.com/package/legal-annotation-kit" target="_blank" rel="noopener" class="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary">legal-annotation-kit</a>.
          Choose a label (or press <kbd class="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[11px] font-semibold">1</kbd>–<kbd class="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[11px] font-semibold">3</kbd>) and then select any words in the text to tag it.
        </p>
      </div>
      <button type="button" class="btn-ghost shrink-0" @click="reset">Reset demo</button>
    </div>

    <div class="overflow-x-auto" role="region" aria-label="Interactive annotation demo" tabindex="0">
      <div class="annotator-frame h-[560px] min-w-[900px]">
        <AnnotatorView
          v-if="mounted"
          :key="demoKey"
          :document="doc"
          :labelset="labelset"
          annotation-level="word"
          :assignment="assignment"
          :position="{ current: 1, total: 1 }"
          :navigation="false"
          :on-save="save"
        />
      </div>
    </div>

    <div class="border-t border-slate-200/80 px-6 py-4 text-xs text-slate-500 sm:px-10">
      <p>
        Sample annotations by the Lawnotation team. Text:
        <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679" target="_blank" rel="noopener" class="font-medium text-primary underline decoration-primary/30 underline-offset-2 transition hover:decoration-primary">Regulation (EU) 2016/679 (GDPR), Article 17 — Right to erasure</a>,
        via EUR-Lex (CELEX:32016R0679). Your edits stay in your own browser and are never sent anywhere.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { AnnotatorView } from "legal-annotation-kit";
import "legal-annotation-kit/style.css";

// ---------------------------------------------------------------------------
// Demo task: the official text of GDPR Article 17 (EUR-Lex, CELEX:32016R0679),
// annotated with a small "normative statements" label set that matches the
// Agreement Lab section above (Duty / Condition / Exception).
// ---------------------------------------------------------------------------

const paragraphs = [
  "1. The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies:",
  "(a) the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;",
  "(b) the data subject withdraws consent on which the processing is based according to point (a) of Article 6(1), or point (a) of Article 9(2), and where there is no other legal ground for the processing;",
  "(c) the data subject objects to the processing pursuant to Article 21(1) and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2);",
  "(d) the personal data have been unlawfully processed;",
  "(e) the personal data have to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject;",
  "(f) the personal data have been collected in relation to the offer of information society services referred to in Article 8(1).",
  "2. Where the controller has made the personal data public and is obliged pursuant to paragraph 1 to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform controllers which are processing the personal data that the data subject has requested the erasure by such controllers of any links to, or copy or replication of, those personal data.",
  "3. Paragraphs 1 and 2 shall not apply to the extent that processing is necessary:",
  "(a) for exercising the right of freedom of expression and information;",
  "(b) for compliance with a legal obligation which requires processing by Union or Member State law to which the controller is subject or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;",
  "(c) for reasons of public interest in the area of public health in accordance with points (h) and (i) of Article 9(2) as well as Article 9(3);",
  "(d) for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) in so far as the right referred to in paragraph 1 is likely to render impossible or seriously impair the achievement of the objectives of that processing; or",
  "(e) for the establishment, exercise or defence of legal claims.",
];

const fullText = paragraphs.join("\n");

const labelset = {
  name: "Normative statements",
  desc: "Sample label set for tagging normative statements in legal text.",
  labels: [
    { name: "Duty", color: "#0D5984" },
    { name: "Condition", color: "#0D8435" },
    { name: "Exception", color: "#840D22" },
  ],
};

// Locate a phrase in the full text; word-level snapping keeps these bounds.
function span(phrase, label, id, extra = {}) {
  const start = fullText.indexOf(phrase);
  if (start === -1) throw new Error(`Demo phrase not found: ${phrase}`);
  return { id, start, end: start + phrase.length, label, text: phrase, relations: [], confidence: 0, metadata: null, ...extra };
}

function createAssignment() {
  const annotations = [
    span("shall have the obligation to erase personal data", "Duty", 1, { confidence: 4 }),
    span("where one of the following grounds applies", "Condition", 2, { confidence: 4 }),
    span("withdraws consent", "Condition", 3),
    span("shall take reasonable steps", "Duty", 4),
    span("shall not apply to the extent that processing is necessary", "Exception", 5, { confidence: 3 }),
  ];

  // One sample relation: the duty in art. 17(1) depends on the condition that a
  // ground applies. Shows off the kit's relation arrows.
  annotations[0].relations = [{ to: 2, direction: "right", labels: ["Depends on"] }];

  return {
    id: "gdpr-art17-demo",
    annotator: "visitor",
    order: 1,
    status: "pending",
    confidence: 0,
    document_annotations: [],
    document_relations: [],
    annotations,
  };
}

const assignment = ref(createAssignment());

const doc = { name: "GDPR Article 17 — Right to erasure", full_text: fullText };

// ---------------------------------------------------------------------------
// Mounting + reset. The kit keeps in-progress edits in a localStorage draft
// keyed on the assignment id; clearing it and remounting restores the sample.
// ---------------------------------------------------------------------------

const DRAFT_KEY = "lak:draft:assignment:gdpr-art17-demo";
const mounted = ref(false);
const demoKey = ref(0);

onMounted(() => {
  mounted.value = true;
});

function save() {
  // Demo only: nothing to persist server-side; the kit records the saved state.
}

function reset() {
  localStorage.removeItem(DRAFT_KEY);
  assignment.value = createAssignment();
  demoKey.value += 1;
}
</script>

<style scoped>
/* Re-theme the kit to the Lawnotation brand palette. The kit declares its
   variables on .lak-annotator itself, so we must target that element too. */
.annotator-frame :deep(.lak-annotator) {
  --lak-accent: #0d5984;
  --lak-sidebar-bg: #e9f0f4;
}
</style>
