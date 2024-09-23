<template>
    <div class="card">
        <div class="member-container bg-beige">
            <div class="member-img">
                <img :src="imageUrl(imageName)" alt="" class="profile-photo" />
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
const { imageName, link, name } = defineProps({
    imageName: String,
    link: String,
    name: String,
});
function imageUrl(name: string) {
    return new URL(`../assets/img/${name}.jpg`, import.meta.url).href;
}
</script>