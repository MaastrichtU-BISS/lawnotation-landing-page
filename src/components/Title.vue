<template>
  <section id="home" class="intro-title-section bg-[length:80px] z-0" ref="scrollRef">
    <div class="container mx-auto p-4 pb-8 flex flex-col gap-4 lg:gap-8">
      <div class="catch-title">
        <h1
          class="font-roboto-slab text-6xl leading-normal md:text-7xl md:leading-normal lg:text-9xl lg:leading-normal"
        >
          <span class="font-roboto-slab">Find, </span>
          <span class="font-roboto-slab">annotate,</span> and
          <span class="font-roboto-slab">publish</span> legal data
        </h1>
      </div>
      <div class="font-roboto-slab flex flex-col gap-4 md:flex-row flex-wrap">
        <a href="https://app.lawnotation.org/auth/login"
          ><button class="btn hover:opacity-80 transition ease-in-out delay-50">Start now</button></a
        >
        <a href="https://docs.lawnotation.org" target="_blank"
          ><button class="btn-outline hover:bg-blue-100 transition ease-in-out delay-50">Documentation</button></a
        >
        <a href="https://app.lawnotation.org/archives" target="_blank"
          ><button class="btn-outline hover:bg-blue-100 transition ease-in-out delay-50">Find documents</button></a
        >
        <a href="https://github.com/MaastrichtU-BISS/lawnotation" target="_blank">
          <button class="border-b-4 border-sky-800 p-0 m-4 pb-2 font-roboto-slab flex items-center gap-2 decoration-4 md:text-2xl text-xl text-sky-800 content-center">
            Our code
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style="fill:#0d5984;">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted } from "vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["home"]);

function onEnter(entry) {
  emit("home");
}
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onScrollIntersect(scrollRef.value, onEnter);
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>

