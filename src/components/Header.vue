<template>
  <header class="shadow-lg md:sticky top-0 z-50 bg-white">
    <div class="container mx-auto flex justify-between px-4 py-2">
      <a href="#home" @click="activeTab = 'home'">
        <img src="../assets/icon/lawnotation_logo_v2.svg" alt="" class="logo"
      /></a>
      <ul class="hidden md:flex justify-around gap-8 list-none items-center">
        <li :class="{ active: isActive }">
          <a class="item" href="#home" @click="activeTab = 'home'">Home</a>
        </li>
        <li :class="{ active: data }">
          <a class="item" href="#data&software" @click="activeTab = 'data'"
            >About</a
          >
        </li>
        <li :class="{ active: team }">
          <a class="item" href="#team" @click="activeTab = 'team'">Team</a>
        </li>
        <li :class="{ active: partners }">
          <a class="item" href="#partners" @click="activeTab = 'partners'">Partners</a>
        </li>
        <li :class="{ active: contact }">
          <a class="item" href="#contact" @click="activeTab = 'contact'">Contact</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { computed, toRefs } from "vue";
const props = defineProps(["activeTab"]);
const { activeTab } = toRefs(props);

const isActive = computed(() => {
  return activeTab.value === "home";
});
const data = computed(() => {
  return activeTab.value === "data";
});
const team = computed(() => {
  return activeTab.value === "team";
});
const contact = computed(() => {
  return activeTab.value === "contact";
});
</script>
