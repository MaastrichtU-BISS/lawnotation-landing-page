<template>
  <header class="shadow-lg">
    <div class="container mx-auto flex justify-between px-4 py-2">
      <a href="#home" @click="activeTab = 'home'">
        <img src="../assets/icon/lawnotation_logo_v2.svg" alt="" class="logo"
      /></a>
      <ul class="navItems">
        <li :class="{ active: isActive }">
          <a class="item" href="#home" @click="activeTab = 'home'">Home</a>
        </li>
        <li :class="{ active: data }">
          <a class="item" href="#data&software" @click="activeTab = 'data'"
            >Data & software</a
          >
        </li>
        <li :class="{ active: team }">
          <a class="item" href="#team" @click="activeTab = 'team'">Team</a>
        </li>
        <li :class="{ active: contact }">
          <a class="item" href="#contactus" @click="activeTab = 'contact'">Contact us</a>
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
