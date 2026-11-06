<template>
  <section id="lab" class="wrap pb-20 lg:pb-28" aria-labelledby="lab-title">
    <div class="card overflow-hidden">
      <div class="border-b border-slate-200/80 bg-gradient-to-r from-secondary-light/70 via-white to-beige/70 px-6 py-7 sm:px-10">
        <p class="eyebrow">Agreement Lab · sample data</p>
        <h2 id="lab-title" class="mt-2 font-slab text-2xl font-medium tracking-tight sm:text-3xl">
          See how annotations become a comparison
        </h2>
        <p class="mt-2 max-w-2xl">Change a sample label to see where two annotators agree.</p>
      </div>

      <div class="grid gap-px bg-slate-200/80 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="bg-white px-6 py-8 sm:px-10">
          <h3 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Sample legal text</h3>
          <blockquote class="mt-4 border-l-4 border-primary/30 pl-4 font-slab text-xl leading-relaxed">
            The authority
            <mark
              class="rounded-sm px-0.5 transition-colors duration-300"
              :class="markClass('must-explain')"
            >must explain</mark>
            its decision
            <mark
              class="rounded-sm px-0.5 transition-colors duration-300"
              :class="markClass('where-required')"
            >where required</mark>,
            <mark
              class="rounded-sm px-0.5 transition-colors duration-300"
              :class="markClass('unless-exception')"
            >unless an exception applies</mark>.
          </blockquote>
          <p class="mt-4 text-xs text-slate-500">Original illustrative text, not a quotation from a case.</p>
        </div>

        <div class="bg-secondary-light/40 px-6 py-8 sm:px-10">
          <h3 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Compare two annotators</h3>
          <p class="mt-1.5 text-xs text-slate-500">Choose a label for each sample span, or leave it unlabelled.</p>

          <div class="mt-4 space-y-3">
            <div
              v-for="span in spans"
              :key="span.id"
              class="rounded-xl border bg-white p-4 transition-colors duration-300"
              :class="tone(span.id).border"
            >
              <div class="flex items-center justify-between gap-3">
                <p class="font-medium">“{{ span.text }}”</p>
                <span
                  class="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  :class="tone(span.id).badge"
                >
                  {{ isMatch(span.id) ? 'Agree' : 'Differ' }}
                </span>
              </div>
              <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <label v-for="annotator in ['A', 'B']" :key="annotator" class="block">
                  <span class="mb-1 block text-xs font-medium text-slate-500">Annotator {{ annotator }}</span>
                  <span class="relative block">
                    <select
                      v-model="selections[span.id][annotator]"
                      class="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2 pl-3 pr-9 text-sm transition hover:border-primary/50 focus:border-primary"
                      :aria-label="`Annotator ${annotator} label for ${span.text}`"
                    >
                      <option v-for="label in labels" :key="label.value" :value="label.value">{{ label.label }}</option>
                    </select>
                    <svg
                      class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-200/80 px-6 py-8 sm:px-10" aria-live="polite">
        <h3 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Sample comparison result</h3>
        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          <div v-for="stat in stats" :key="stat.label" class="rounded-xl border border-slate-200/80 bg-beige/60 px-4 py-4">
            <span class="block text-xs font-medium uppercase tracking-wide text-slate-500">{{ stat.label }}</span>
            <strong class="mt-1 block font-slab text-3xl font-medium">{{ stat.value }}</strong>
          </div>
        </div>
        <p class="mt-4 text-xs text-slate-500">
          Illustrative sample statistics only. Lawnotation’s metrics page reports agreement results for a research task.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, reactive } from "vue";

const labels = [
  { value: "duty", label: "Duty" },
  { value: "condition", label: "Condition" },
  { value: "exception", label: "Exception" },
  { value: "", label: "No label" },
];

const spans = [
  { id: "must-explain", text: "must explain" },
  { id: "where-required", text: "where required" },
  { id: "unless-exception", text: "unless an exception applies" },
];

const selections = reactive({
  "must-explain": { A: "duty", B: "duty" },
  "where-required": { A: "condition", B: "condition" },
  "unless-exception": { A: "exception", B: "condition" },
});

const pairs = computed(() => spans.map((span) => [selections[span.id].A, selections[span.id].B]));

function isMatch(id) {
  const pair = pairs.value.find((_, index) => spans[index].id === id);
  return pair[0] === pair[1];
}

// Per-span colour themes. Class names must stay literal strings so Tailwind's
// JIT compiler generates them. "where required" uses its own violet/rose family
// to stay visually distinct from the emerald/amber spans.
const toneClasses = {
  emerald: {
    mark: ["bg-emerald-100", "decoration-emerald-500"],
    border: "border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800",
  },
  amber: {
    mark: ["bg-amber-100", "decoration-amber-500"],
    border: "border-amber-300",
    badge: "bg-amber-100 text-amber-800",
  },
  violet: {
    mark: ["bg-violet-100", "decoration-violet-500"],
    border: "border-violet-300",
    badge: "bg-violet-100 text-violet-800",
  },
  rose: {
    mark: ["bg-rose-100", "decoration-rose-500"],
    border: "border-rose-300",
    badge: "bg-rose-100 text-rose-800",
  },
};

const spanTones = {
  "must-explain": { match: "emerald", differ: "amber" },
  "where-required": { match: "violet", differ: "rose" },
  "unless-exception": { match: "emerald", differ: "amber" },
};

function tone(id) {
  return toneClasses[spanTones[id][isMatch(id) ? "match" : "differ"]];
}

function markClass(id) {
  const [bg, decoration] = tone(id).mark;
  return [bg, "underline decoration-2 underline-offset-[3px]", decoration];
}

const observed = computed(() => (pairs.value.length ? pairs.value.filter(([a, b]) => a === b).length / pairs.value.length : 0));

const kappa = computed(() => {
  const total = pairs.value.length;
  if (!total) return null;
  const counts = (index) => {
    const result = new Map();
    for (const pair of pairs.value) result.set(pair[index], (result.get(pair[index]) || 0) + 1);
    return result;
  };
  const aCounts = counts(0);
  const bCounts = counts(1);
  const allLabels = new Set([...aCounts.keys(), ...bCounts.keys()]);
  const expected =
    [...allLabels].reduce((sum, label) => sum + (aCounts.get(label) || 0) * (bCounts.get(label) || 0), 0) / (total * total);
  return expected === 1 ? null : (observed.value - expected) / (1 - expected);
});

const stats = computed(() => [
  { label: "Exact label agreement", value: pairs.value.length ? `${Math.round(observed.value * 100)}%` : "—" },
  { label: "Cohen’s κ", value: kappa.value === null ? "—" : kappa.value.toFixed(2) },
  { label: "Sample spans compared", value: String(spans.length) },
]);
</script>
