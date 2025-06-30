<script setup lang="ts">
import HomeBioSection from './HomeBioSection.vue';
import HomeContactSection from './HomeContactSection.vue';
import HomeHeroSection from './HomeHeroSection.vue';
import HomeSpotlightSection from './HomeSpotlightSection.vue';
</script>

<template>
    <article class="home" aria-label="Home Page">
        <HomeHeroSection />
        <HomeSpotlightSection />
        <HomeBioSection />
        <HomeContactSection />
    </article>
</template>

<style lang="css">
.home {
    display: flex;
    flex-direction: column;
    gap: 7rem;
}
</style>
