<template>
    <div class="bg-beige p-6 rounded-lg shadow-lg shadow-dark-brown/20 flex flex-col items-start transform"
        :style="`transform: rotate(${rotate}deg)`">
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