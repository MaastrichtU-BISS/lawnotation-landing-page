<template>
    <div class="card">
        <div class="member-container bg-beige">
            <div class="member-img">
                <img :src="image" alt="" class="profile-photo" />
            </div>
            <div class="member-info">
                <h4>
                    <a :href="link">{{ name }}</a>
                </h4>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { image, link, name } = defineProps({
    image: String,
    link: String,
    name: String,
});
</script>