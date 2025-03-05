<template>
  <section id="team" class="developer_team my-32" ref="scrollRef">
    <span class="team_title">
      <h2 class="underline underline-offset-[5px]">Team</h2>
    </span>

    <TeamMember name="Prof. Gijs van Dijck" link="https://www.biss-institute.com/en/team/gijs-van-dijck"
      imageName="gijs">
      <p>Law, AI</p>

      <ul>
        <li>
          <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab"> Maastricht Law
            and Tech Lab
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.biss-institute.com/"> Brightlands Institute for Smart Society
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      </ul>
    </TeamMember>

    <TeamMember name="Carlos Aguilera" link="https://www.biss-institute.com/en/team/carlos-aguilera" imageName="carlos">
      <p>data engineering, front-end development, back-end development</p>

      <ul>
        <li>
          <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab"> Maastricht Law
            and Tech Lab
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.biss-institute.com/"> Brightlands Institute for Smart Society
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      </ul>
    </TeamMember>

    <TeamMember name="Chris van der Lans" link="https://www.biss-institute.com/en/team/chris-van-der-lans"
      imageName="chris">
      <p> front-end development, user experience (UX), information architecture, human-centric design </p>

      <ul>
        <li>
          <a href="https://www.biss-institute.com/"> Brightlands Institute for Smart Society
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      </ul>
    </TeamMember>

    <TeamMember name="Shashank Chakravarthy" link="https://www.biss-institute.com/en/team/shashank-chakravarthy"
      imageName="shashank">
      <p>data engineering, NLP, machine learning, AI</p>

      <ul>
        <li>
          <a href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab"> Maastricht Law
            and Tech Lab
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.biss-institute.com/"> Brightlands Institute for Smart Society
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      </ul>
    </TeamMember>

    <TeamMember name="Sander van Essel" link="https://www.biss-institute.com/en/team/sander-van-essel"
      imageName="sander">
      <p>Frontend development, backend development, data engineering</p>

      <ul>
        <li>
          <a href="https://www.biss-institute.com/"> Brightlands Institute for Smart Society
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </li>
      </ul>
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

<style scoped>
li {
  @apply border-b-[1.5px] border-transparent hover:border-current inline;
}
</style>