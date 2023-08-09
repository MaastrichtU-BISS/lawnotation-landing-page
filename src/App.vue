<template>
  <Header :active-tab="activeTab" />

  <main>
    <Title @home="setActiveTabTo('home')" />
    <Intro  @data="setActiveTabTo('data')" />
    <Team @team="setActiveTabTo('team')" />
  </main>
  
  <Footer @partnersAndContact="setActiveTabTo('partners&contact')" />
</template>

<script setup lang="ts">
import Team from "./components/Team.vue";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Footer from "./components/Footer.vue";
import Title from "./components/Title.vue";

import { ref } from "vue";
const activeTab = ref("home");

function setActiveTabTo(tabName: string) {
  activeTab.value = tabName;
}
</script>
