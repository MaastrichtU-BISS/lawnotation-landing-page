import { createApp } from "vue";
import App from "./App.vue";
import "@fontsource-variable/roboto-slab";
import "./assets/main.css";

const app = createApp(App);

/**
 * v-reveal — fades an element in the first time it scrolls into view.
 * Usage: v-reveal or v-reveal="{ delay: 120 }" (stagger in ms).
 */
app.directive("reveal", {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (binding.value?.delay) {
      el.style.transitionDelay = `${binding.value.delay}ms`;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
  },
});

app.mount("#app");
