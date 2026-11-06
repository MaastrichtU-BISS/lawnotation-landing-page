<template>
  <section id="how-it-works" class="wrap pb-20 lg:pb-28" aria-labelledby="how-title">
    <div class="max-w-2xl">
      <p class="eyebrow">Workflow</p>
      <h2 id="how-title" class="section-title mt-2">How it works</h2>
      <p class="mt-3">From raw legal documents to a published, agreement-checked dataset in three steps.</p>
    </div>

    <ol class="mt-10 grid gap-6 md:grid-cols-3">
      <li
        v-for="(step, index) in steps"
        :key="step.title"
        v-reveal="{ delay: index * 120 }"
        class="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      >
        <span
          class="mb-5 block h-0.5 origin-left rounded-full bg-primary/70 animate-draw"
          :style="{ animationDelay: `${index * 0.4}s` }"
          aria-hidden="true"
        ></span>
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-light font-slab text-sm font-semibold text-primary">
            {{ index + 1 }}
          </span>
          <span v-html="step.icon" class="text-primary" aria-hidden="true"></span>
        </div>
        <h3 class="mt-4 font-slab text-xl font-medium">{{ step.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed">{{ step.text }}</p>
      </li>
    </ol>

    <div class="mt-12 hidden sm:block" v-reveal="{ delay: 240 }">
      <AnnotatorDemo />
    </div>

    <div class="mt-12" v-reveal="{ delay: 360 }">
      <AgreementLab />
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// The annotator demo pulls in the legal-annotation-kit bundle (~60 kB), so it
// is loaded on demand and only blocks its own slot with a skeleton.
const AnnotatorDemo = defineAsyncComponent(() => import("./AnnotatorDemo.vue"));
const AgreementLab = defineAsyncComponent(() => import("./AgreementLab.vue"));

const icon = (path) => `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">${path}</svg>`;

const steps = [
  {
    title: "Find or upload",
    text: "Search Rechtspraak by ECLI, or upload TXT, PDF, and HTML documents.",
    icon: icon('<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />'),
  },
  {
    title: "Assign a team",
    text: "Set labels and guidelines, then distribute documents to annotators.",
    icon: icon('<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />'),
  },
  {
    title: "Compare and share",
    text: "Inspect annotation agreement and publish research data when ready.",
    icon: icon('<path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />'),
  },
];
</script>
