<template>
  <section id="consortium" class="bg-secondary-light/50" aria-labelledby="consortium-title">
    <div class="wrap py-16 lg:py-24">
      <div class="max-w-2xl">
        <p class="eyebrow">Consortium</p>
        <h2 id="consortium-title" class="section-title mt-2">Consortium partners</h2>
        <p class="mt-3">
          Lawnotation is a collaboration between researchers at universities across the Netherlands.
        </p>
      </div>

      <ul v-reveal class="mt-10 grid gap-x-12 gap-y-1 sm:grid-cols-2">
        <li
          v-for="person in people"
          :key="person.name"
          class="flex items-baseline justify-between gap-x-3 sm:gap-x-4 border-b border-primary/10 py-3.5"
        >
          <a
            :href="person.href"
            target="_blank"
            rel="noopener"
            class="whitespace-nowrap text-sm font-medium text-ink underline decoration-primary/30 underline-offset-4 transition hover:text-primary hover:decoration-primary sm:text-base"
            >{{ person.name }}</a
          >
          <span class="min-w-0 truncate text-right text-xs text-slate-500 sm:text-sm">{{ person.institution }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const people = [
  {
    name: "Prof. Floris Bex",
    href: "https://www.tilburguniversity.edu/staff/f-j-bex",
    institution: "Utrecht University / Tilburg University",
  },
  {
    name: "Dr. Balázs Bodó",
    href: "https://www.uva.nl/en/profile/b/o/b.bodo/b.bodo.html?cb",
    institution: "University of Amsterdam",
  },
  {
    name: "Prof. G. Dari-Mattiacci",
    href: "https://www.uva.nl/en/profile/d/a/g.darimattiacci/g.darimattiacci.html",
    institution: "University of Amsterdam",
  },
  {
    name: "Robert van Doesburg",
    href: "https://www.uva.nl/profiel/d/o/r.vandoesburg/r.vandoesburg.html",
    institution: "University of Amsterdam / TNO",
  },
  {
    name: "Prof. Tom van Engers",
    href: "https://www.uva.nl/en/profile/e/n/t.m.vanengers/t.m.vanengers.html",
    institution: "University of Amsterdam / TNO",
  },
  {
    name: "Prof. Andre Janssen",
    href: "https://www.ru.nl/en/people/janssen-a",
    institution: "Radboud University",
  },
  {
    name: "Prof. Pietro Ortolani",
    href: "https://www.ru.nl/en/people/ortolani-p",
    institution: "Radboud University",
  },
  {
    name: "Prof. Michel Vols",
    href: "https://www.rug.nl/staff/m.vols/research",
    institution: "University of Groningen",
  },
  {
    name: "Prof. Martijn Wieling",
    href: "https://www.rug.nl/staff/m.b.wieling/",
    institution: "University of Groningen",
  },
  {
    name: "Dr. Pieter Wolters",
    href: "https://www.ru.nl/en/people/wolters-p",
    institution: "Radboud University",
  },
];
</script>
