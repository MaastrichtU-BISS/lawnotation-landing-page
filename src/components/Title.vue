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
      <div class="font-roboto-slab flex flex-col gap-4 md:flex-row">
        <a href="https://app.lawnotation.org/auth/login"
          ><button class="btn hover:opacity-80 transition ease-in-out delay-50">Start now</button></a
        >
        <a href="https://docs.lawnotation.org" target="_blank"
          ><button class="btn-outline hover:bg-blue-100 transition ease-in-out delay-50">Documentation</button></a
        >
        <a href="https://app.lawnotation.org/archives" target="_blank"
          ><button class="btn-outline hover:bg-blue-100 transition ease-in-out delay-50">Find documents</button></a
        >
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
