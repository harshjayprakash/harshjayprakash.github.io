<script setup lang="ts">
import HomeContactSection from '@/views/home/HomeContactSection.vue';
import HomeHeroSection from '@/views/home/HomeHeroSection.vue';
import HomeProjectSection from '@/views/home/HomeProjectSection.vue';
import HomeServiceSection from '@/views/home/HomeServiceSection.vue';
</script>

<template>
    <article class="home" aria-label="Home">
        <HomeHeroSection />
        <HomeServiceSection />
        <HomeProjectSection />
        <HomeContactSection />
    </article>
</template>

<style lang="css" scoped>
.home {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
