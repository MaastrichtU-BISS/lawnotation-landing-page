<template>
  <section id="team" class="wrap py-20 lg:py-28" aria-labelledby="team-title">
    <div class="max-w-2xl">
      <h2 id="team-title" class="section-title">The team</h2>
      <p class="mt-3">Developers and researchers from BISS and the Law and Tech Lab, both part of Maastricht University.</p>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="(member, i) in members"
        :key="member.name"
        v-reveal="{ delay: i * 80 }"
        class="group flex flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition duration-300 hover:shadow-card-hover sm:flex-row sm:items-center"
        :class="i === 0 ? 'sm:col-span-2 lg:col-span-3 sm:p-8' : ''"
      >
        <img
          :src="imageUrl(member.image)"
          :alt="`Portrait of ${member.name}`"
          loading="lazy"
          class="h-20 w-20 shrink-0 rounded-2xl object-cover grayscale transition duration-300 group-hover:grayscale-0 sm:h-24 sm:w-24"
          :class="i === 0 ? 'sm:h-28 sm:w-28' : ''"
        />
        <div>
          <h3 class="font-slab text-xl font-medium">
            <a
              :href="member.link"
              target="_blank"
              rel="noopener"
              class="underline decoration-primary/30 underline-offset-4 transition hover:text-primary hover:decoration-primary"
              >{{ member.name }}</a
            >
          </h3>
          <p class="mt-1 text-sm">{{ member.role }}</p>
          <p class="mt-1.5 text-xs text-slate-500">
            <template v-for="(aff, j) in member.affiliations" :key="aff.label">
              <a :href="aff.href" target="_blank" rel="noopener" class="hover:text-primary">{{ aff.label }}</a>
              <span v-if="j < member.affiliations.length - 1" aria-hidden="true"> & </span>
            </template>
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const biss = { label: "BISS", href: "https://www.biss-institute.com/" };

const members = [
  {
    name: "Prof. Gijs van Dijck",
    link: "https://www.biss-institute.com/en/team/gijs-van-dijck",
    role: "Law, AI",
    affiliations: [
      biss,
      { label: "Law and Tech Lab", href: "https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab" },
    ],
    image: "gijs",
  },
  {
    name: "Carlos Aguilera",
    link: "https://www.biss-institute.com/en/team/carlos-aguilera",
    role: "Data engineering and software development",
    affiliations: [biss],
    image: "carlos",
  },
  {
    name: "Chris van der Lans",
    link: "https://www.biss-institute.com/en/team/chris-van-der-lans",
    role: "UX, information architecture, human-centric design",
    affiliations: [biss],
    image: "chris",
  },
  {
    name: "Shashank Chakravarthy",
    link: "https://www.biss-institute.com/en/team/shashank-chakravarthy",
    role: "Data engineering, NLP, machine learning, AI",
    affiliations: [biss],
    image: "shashank",
  },
];

function imageUrl(name) {
  return new URL(`../assets/img/${name}.jpg`, import.meta.url).href;
}
</script>
