<template>
  <header class="shadow-lg md:sticky top-0 z-50 bg-white">
    <div class="container mx-auto flex justify-between px-4 py-2">
      <a href="#home" @click="activeTab = 'home'" aria-label="Go back to the top of the page">
        <img src="../assets/icon/lawnotation_logo_v2.svg" alt="" class="logo"
      /></a>
      <ul class="hidden md:flex justify-around gap-8 list-none items-center">
        <li :class="{ active: activeTab === 'home' }">
          <a href="#home">Home</a>
        </li>
        <li :class="{ active: activeTab === 'about' }">
          <a href="#about">About</a>
        </li>
        <li :class="{ active: activeTab === 'team' }">
          <a href="#team">Team</a>
        </li>
        <li :class="{ active: activeTab === 'partners&contact' }">
          <a href="#partners&contact">Partners & Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps(["activeTab"]);
const { activeTab } = toRefs(props);
</script>
