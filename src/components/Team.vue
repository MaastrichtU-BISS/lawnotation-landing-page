<template>
  <section id="team" class="develpoer_team my-32" ref="scrollRef">
    <!-- <a ></a> -->
    <span class="team_title">
      <h2 class="underline underline-offset-[5px]">Team</h2>
    </span>
    <TeamMember name="Prof. Gijs van Dijck" link="https://www.biss-institute.com/team/Gijs-van-Dijck/"
      image="src/assets/img/gijs.jpg">
      <p>Law, AI</p>
      <p>
        <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">
          Maastricht Law and Tech Lab</a>
      </p>
      <p>
        <a href="https://www.biss-institute.com/">Brightlands Institute for Smart Society</a>
      </p>
    </TeamMember>
    <TeamMember name="Carlos Aguilera" link="https://www.biss-institute.com/team/Carlos-Aguilera/"
      image="src/assets/img/carlos.jpg">
      <p>data engineering, front-end development, back-end development</p>
      <p>
        <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">
          Maastricht Law and Tech Lab</a>
      </p>
      <p>
        <a href="https://www.biss-institute.com/">Brightlands Institute for Smart Society</a>
      </p>
    </TeamMember>
    <TeamMember name="Chris van der Lans" link="https://www.biss-institute.com/team/chris-van-der-lans/"
      image="src/assets/img/chris.jpg">
      <p> front-end development, user experience (UX), information architecture, human-centric design </p>
      <p><a href="https://www.biss-institute.com/">Brightlands Institute for Smart Society</a></p>
    </TeamMember>
    <TeamMember name="Shashank Chakravarthy" link="https://www.biss-institute.com/team/Shashank-Chakravarthy/"
      image="src/assets/img/shashank.jpg">
      <p>data engineering, NLP, machine learning, AI</p>
      <p>
        <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">
          Maastricht Law and Tech Lab</a>
      </p>
      <p>
        <a href="https://www.biss-institute.com/">Brightlands Institute for Smart Society</a>
      </p>
    </TeamMember>
    <TeamMember name="Sander van Essel" link="https://www.biss-institute.com/team/sander-van-essel/"
      image="src/assets/img/sander.jpg">
      <p>Frontend development, backend development, data engineering</p>
      <p>
        <a href="https://www.biss-institute.com/">Brightlands Institute for Smart Society</a>
      </p>
    </TeamMember>
  </section>
</template>

<script setup>
import { onScrollIntersect } from "../composables/onScrollIntersect";
import { ref, onMounted, onUnmounted } from "vue";
import TeamMember from "./TeamMember.vue";

const observer = ref({});
const scrollRef = ref({});

const emit = defineEmits(["team"]);

function onEnter(entry) {
  emit("team");
}
// When the component is mounted, start observing
onMounted(() => {
  observer.value = onScrollIntersect(scrollRef.value, onEnter, .6);
});

// When the component is removed, disconnect the observer (clean-up step)
onUnmounted(() => {
  observer.value.disconnect();
});
</script>
