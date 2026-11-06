<template>
  <section id="home" class="relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-b from-secondary-light/80 via-white to-white"></div>
      <div class="absolute -top-28 right-[-12%] h-[26rem] w-[26rem] rounded-full bg-secondary-light opacity-70 blur-3xl"></div>
      <div class="absolute left-[-12%] top-44 h-[20rem] w-[20rem] rounded-full bg-beige opacity-90 blur-3xl"></div>
    </div>

    <div class="wrap pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
      <p class="eyebrow animate-fade-up">Legal text annotation for research</p>

      <h1
        class="mt-4 max-w-4xl animate-fade-up font-slab text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl [animation-delay:80ms]"
      >
        Find legal documents. Coordinate annotation.
        <span class="relative inline-block text-primary">
          Compare agreement.
          <span
            class="absolute inset-x-0 bottom-1 -z-10 h-3 -rotate-1 rounded-sm bg-secondary/70 sm:h-4"
            aria-hidden="true"
          ></span>
        </span>
      </h1>

      <p class="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed [animation-delay:160ms]">
        Find decisions by ECLI or bring your own documents. Set up an annotation task, work with a team, and inspect
        how consistently you apply your labels.
      </p>

      <div class="mt-8 flex flex-wrap items-center gap-3 animate-fade-up [animation-delay:240ms]">
        <a href="https://app.lawnotation.org/auth/login" class="btn-primary !px-6 !py-3 !text-base">Start now</a>
        <a href="https://docs.lawnotation.org" target="_blank" rel="noopener" class="btn-secondary !py-3">How to get started</a>
        <a href="https://app.lawnotation.org/archives" target="_blank" rel="noopener" class="btn-secondary !py-3">Find documents</a>
        <a
          href="https://github.com/MaastrichtU-BISS/lawnotation"
          target="_blank"
          rel="noopener"
          class="btn-ghost !py-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path
              d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"
            />
          </svg>
          Our code
        </a>
      </div>
    </div>
  </section>
</template>
