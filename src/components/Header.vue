<template>
  <header class="shadow-lg md:sticky top-0 z-50 bg-white">
    <div class="container mx-auto flex justify-between px-4 py-2">
      <a href="#home" @click="activeTab = 'home'">
        <img src="../assets/icon/lawnotation_logo_v2.svg" alt="" class="logo"
      /></a>
      <ul class="hidden md:flex justify-around gap-8 list-none items-center">
        <li :class="{ active: activeTab === 'home' }">
          <a class="item" href="#home">Home</a>
        </li>
        <li :class="{ active: activeTab === 'data' }">
          <a class="item" href="#data&software">About</a>
        </li>
        <li :class="{ active: activeTab === 'team' }">
          <a class="item" href="#team">Team</a>
        </li>
        <li :class="{ active: activeTab === 'partners&contact' }">
          <a class="item" href="#partners&contact">Partners & Contact</a>
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
