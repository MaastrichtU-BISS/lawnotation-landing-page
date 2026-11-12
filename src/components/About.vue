<template>
  <section id="about" class="bg-beige/70">
    <div class="wrap grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
      <div v-reveal>
        <p class="eyebrow">About the project</p>
        <h2 class="section-title mt-2">What is Lawnotation?</h2>
        <div class="mt-5 space-y-4 leading-relaxed">
          <p>
            The Lawnotation project develops an infrastructure that makes legal data and annotation
            schemes accessible for annotation and analysis, an annotation platform for analysing the linguistic and
            legal characteristics of legal documents, and a user-friendly interface for both.
          </p>
          <p>
            A team of developers works closely with researchers to improve access to legal materials. The platform is
            open source and free of use for researchers.
          </p>
          <p>
            Lawnotation is an initiative of the Digital Legal Studies cluster in the Sectorplan Social Sciences and
            Humanities (SSH) – Rechtsgeleerdheid, together with other Dutch universities working on the digitalisation
            of law. The research is made possible by the Platform Digitale Infrastructuur SSH.
          </p>
        </div>
      </div>

      <div v-reveal="{ delay: 120 }" class="card self-start p-6 sm:p-8">
        <h3 class="font-slab text-xl font-medium">Data &amp; software</h3>
        <p class="mt-2 text-sm">Open-source extractors and tools built for and around the platform:</p>
        <div class="mt-3 space-y-2">
          <div v-for="(group, gi) in toolGroups" :key="group.title" class="border-b border-slate-100 last:border-b-0">
            <h4>
              <button
                type="button"
                class="flex w-full items-center justify-between gap-3 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 transition hover:text-primary"
                :aria-expanded="openGroups[gi]"
                :aria-controls="`data-software-panel-${gi}`"
                @click="toggleGroup(gi)"
              >
                {{ group.title }}
                <span class="flex shrink-0 items-center gap-2">
                  <span class="text-[10px] font-medium normal-case tracking-normal text-slate-400">{{ group.tools.length }}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4 transition-transform duration-300"
                    :class="openGroups[gi] ? 'rotate-180' : ''"
                  >
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h4>
            <div
              :id="`data-software-panel-${gi}`"
              class="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
              :class="openGroups[gi] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
            >
              <div class="min-h-0 overflow-hidden">
                <ul class="space-y-4 pb-4">
                  <li v-for="tool in group.tools" :key="tool.name">
                    <a :href="tool.href" target="_blank" rel="noopener" class="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition hover:decoration-primary">
                      {{ tool.name }}
                    </a>
                    <span class="mx-2 text-slate-300" aria-hidden="true">—</span>
                    <span class="text-sm">{{ tool.text }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const toolGroups = [
  {
    title: "Extractors & data tooling",
    tools: [
      { name: "CJEU extractor", href: "https://pypi.org/project/cellar-extractor/", text: "Extracts case law of the Court of Justice of the European Union (CELLAR / EUR-Lex)." },
      { name: "ECHR extractor", href: "https://pypi.org/project/echr-extractor/", text: "Extracts case law of the European Court of Human Rights." },
      { name: "Rechtspraak extractor", href: "https://pypi.org/project/rechtspraak-extractor/", text: "Extracts case law of the Netherlands." },
      { name: "CELEX articles extractor", href: "https://github.com/MaastrichtU-BISS/celex-articles-extractor", text: "Scrapes EUR-Lex and segments CELEX documents into articles." },
      { name: "Hof van Friesland", href: "https://github.com/MaastrichtU-BISS/Hof_van_Friesland", text: "Segments transcribed case datasets of the Court of Friesland into individual cases." },
      { name: "Link extractor", href: "https://github.com/MaastrichtU-BISS/linkextractor", text: "Scans text for legal citations (ECLI references), used in the Case Law Explorer pipeline." },
      { name: "Lawnotation parser", href: "https://github.com/MaastrichtU-BISS/lawnotation-parser", text: "Preprocesses LLM-generated annotations to make them lawnotation-ready." },
    ],
  },
];

// Collapsible groups: extractors start open, platform components start collapsed.
const openGroups = reactive(toolGroups.map((_, index) => index === 0));

function toggleGroup(index) {
  openGroups[index] = !openGroups[index];
}
</script>
