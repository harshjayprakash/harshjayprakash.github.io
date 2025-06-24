<script setup lang="ts">
import HomeHeroSection from './HomeHeroSection.vue';
import HomeSelectProjectsSection from './HomeSelectProjectsSection.vue';
</script>

<template>
    <article class="home" aria-label="Home Page">
        <HomeHeroSection />
        <HomeSelectProjectsSection />
    </article>
</template>

<style lang="css" scoped>
.home {
    display: flex;
    flex-direction: column;
    gap: 7rem;
}
</style>
