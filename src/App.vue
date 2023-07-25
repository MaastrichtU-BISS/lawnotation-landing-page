<template>
  <Header :active-tab="activeTab"/>

  <main>
    <IntroTitle @home="activeTab = 'home'"/>
    <Intro  @data="activeTab = 'data'"/>
    <Team @team="activeTab = 'team'" />
  </main>
  
  <Footer @contact="activeTab = 'contact'"/>
</template>

<script setup>

import Team from "./components/Team.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Footer from "./components/Footer.vue";
import IntroTitle from "./components/IntroTitle.vue";

import { ref } from "vue";
const activeTab = ref("home");

</script>
