<template>
  <footer id="contact" class="bg-primary-dark text-white">
    <div class="wrap py-16 lg:py-20">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p class="eyebrow !text-secondary">Contact</p>
          <h2 class="mt-3 max-w-xl font-slab text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Questions about using the platform or joining development?
          </h2>
          <a
            href="mailto:biss-devs@maastrichtuniversity.nl"
            class="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark transition hover:bg-secondary-light"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-5 w-5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            biss-devs@maastrichtuniversity.nl
          </a>
        </div>

        <nav class="lg:justify-self-end" aria-label="Footer">
          <p class="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">Explore</p>
          <ul class="mt-4 space-y-3 text-sm">
            <li><a class="transition hover:text-secondary" href="https://app.lawnotation.org/auth/login">Start annotating</a></li>
            <li><a class="transition hover:text-secondary" href="https://docs.lawnotation.org" target="_blank" rel="noopener">Documentation</a></li>
            <li><a class="transition hover:text-secondary" href="https://app.lawnotation.org/archives" target="_blank" rel="noopener">Published documents</a></li>
            <li>
              <a class="inline-flex items-center gap-2 transition hover:text-secondary" href="https://github.com/MaastrichtU-BISS/lawnotation" target="_blank" rel="noopener">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
                Source code
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-sm text-secondary">
        <p>
          Lawnotation — an initiative of the Digital Legal Studies cluster, made possible by the Platform Digitale
          Infrastructuur SSH.
        </p>
        <p>© 2022–2026 Lawnotation</p>
      </div>
    </div>
  </footer>
</template>
