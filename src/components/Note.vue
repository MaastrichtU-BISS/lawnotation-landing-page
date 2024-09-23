<template>
    <div :class="`bg-beige p-6 rounded-lg shadow-md flex flex-col items-start transform rotate-[${rotate}deg]`">
        <slot></slot>
        <h2 class="font-bold text-lg mb-2">{{ title }}</h2>
        <p class="text-sm">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
const { title, text } = defineProps({
    rotate: {
        type: Number,
        default: 0,
    },
    title: String,
    text: String,
})
</script>