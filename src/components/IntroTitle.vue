<template>
  <section id="home" class="intro-title-section bg-[length:80px] z-0" ref="scrollRef">
    <div class="container mx-auto p-4 flex flex-col gap-4">
      <div class="catch-title">
        <h1 class="font-roboto-slab">
          <span>Find,</span> <span>annotate</span> and <span>store</span> legal data
        </h1>
      </div>
      <div class="font-roboto-slab flex flex-col gap-4 md:flex-row">
        <a href="https://lawnotation.vercel.app" target="_blank"
          ><button class="btn">Start now</button></a
        >
        <a href="#data&software"><button class="btn-outline">Read more</button></a>
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
  console.log("Entering", entry);
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
