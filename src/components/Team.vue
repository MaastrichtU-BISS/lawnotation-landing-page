<template>
  <section id="team" class="develpoer_team my-32" ref="scrollRef">
    <!-- <a ></a> -->
    <span class="team_title">
      <h2 class="underline underline-offset-[5px]">Team</h2>
    </span>
    <TeamMember name="Prof. Gijs van Dijck" link="https://www.biss-institute.com/en/team/gijs-van-dijck"
      imageName="gijs">
      <p>Law, AI</p>
      <a class="hover:underlin border-b-2 border-current"
        href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">
        <p class="border-b-[1.5px] border-transparent hover:border-current">
          Maastricht Law and Tech Lab
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </p>
      </a>



      <p>
        <a class="hover:underline" href="https://www.biss-institute.com/">Brightlands Institute for Smart Society
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </p>
    </TeamMember>
    <TeamMember name="Carlos Aguilera" link="https://www.biss-institute.com/en/team/carlos-aguilera" imageName="carlos">
      <p>data engineering, front-end development, back-end development</p>
      <p>
        <a class="hover:underline"
          href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">Maastricht Law and
          Tech Lab
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </p>
      <p>
        <a class="group hover:underline" href="https://www.biss-institute.com/">
          Brightlands Institute for Smart Society
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            <text class="stroke-transparent group-hover:stroke-current" font-size="4px" text-anchor="middle"
              dominant-baseline="central" y="18" x="12">__________</text>
          </svg>
        </a>
      </p>
    </TeamMember>
    <TeamMember name="Chris van der Lans" link="https://www.biss-institute.com/en/team/chris-van-der-lans"
      imageName="chris">
      <p> front-end development, user experience (UX), information architecture, human-centric design </p>
      <p>
        <a class="hover:underline" href="https://www.biss-institute.com/">Brightlands Institute for Smart Society
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </p>
    </TeamMember>
    <TeamMember name="Shashank Chakravarthy" link="https://www.biss-institute.com/en/team/shashank-chakravarthy"
      imageName="shashank">
      <p>data engineering, NLP, machine learning, AI</p>
      <p>
        <a class="hover:underline"
          href="https://www.maastrichtuniversity.nl/about-um/faculties/law/research/law-and-tech-lab">Maastricht Law and
          Tech Lab
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </p>
      <p>
        <a class="hover:underline" href="https://www.biss-institute.com/">Brightlands Institute for Smart Society
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </p>
    </TeamMember>
    <TeamMember name="Sander van Essel" link="https://www.biss-institute.com/en/team/sander-van-essel"
      imageName="sander">
      <p>Frontend development, backend development, data engineering</p>
      <p>
        <a class="hover:underline" href="https://www.biss-institute.com/">Brightlands Institute for Smart Society
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="h-4 inline">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
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
