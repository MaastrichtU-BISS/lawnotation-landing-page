<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
    <div class="wrap flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
      <a href="#home" class="flex shrink-0 items-center" aria-label="Lawnotation home">
        <img src="../assets/icon/lawnotation_logo_v2.svg" alt="Lawnotation" class="h-9 w-auto sm:h-10" />
      </a>

      <nav class="hidden items-center md:flex" aria-label="Main navigation">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="rounded-full px-3.5 py-2 text-sm font-semibold transition hover:bg-secondary-light/70"
          :class="active === item.id ? 'text-primary' : 'text-slate-600 hover:text-primary'"
          :aria-current="active === item.id ? 'true' : undefined"
          @click="go(item.id)"
        >
          {{ item.label }}
        </a>
        <span class="mx-3 hidden h-6 w-px bg-slate-200 lg:block" aria-hidden="true"></span>
        <a href="https://app.lawnotation.org/auth/login" class="btn-primary !px-4 !py-2">Start now</a>
      </nav>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-secondary-light/70 hover:text-primary md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-nav"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        @click="open = !open"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-show="open" id="mobile-nav" class="border-t border-slate-200/70 bg-white px-4 pb-4 pt-2 md:hidden">
      <a
        v-for="item in items"
        :key="item.id"
        :href="`#${item.id}`"
        class="block rounded-lg px-3 py-2.5 text-sm font-semibold transition hover:bg-secondary-light/70"
        :class="active === item.id ? 'text-primary' : 'text-slate-600'"
        @click="go(item.id)"
      >
        {{ item.label }}
      </a>
      <a href="https://app.lawnotation.org/auth/login" class="btn-primary mt-2 w-full">Start now</a>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const items = [
  { id: "how-it-works", label: "How it works" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "consortium", label: "Consortium" },
];

const active = ref("");
const open = ref(false);
let observer;

function go(id) {
  active.value = id;
  open.value = false;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          active.value = entry.target.id;
        }
      }
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );
  items.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => observer?.disconnect());
</script>
