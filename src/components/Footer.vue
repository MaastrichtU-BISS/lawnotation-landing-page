<template>
  <footer class="bg-[length:80px] px-4">
    <Contributors />
    <section id="contact" class="mt-8 lg:mt-4" ref="scrollRef">
      <h3 class="text-xl">
        Interested in joining the development or in using the platform?
      </h3>
      <p class="text-xl mt-4 mb-8">
        Send an email to:
        <a
          class="underline underline-offset-2 text-[#0D5984]"
          href="mailto: law-techlab@maastrichtuniversity.nl"
          >law-techlab@maastrichtuniversity.nl</a
        >
      </p>
    </section>
  </footer>
</template>
<script setup>
import Contributors from "./Contributors.vue";
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted } from "vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["contact"]);

function onEnter(entry) {
  console.log("Entering", entry);
  emit("contact");
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
