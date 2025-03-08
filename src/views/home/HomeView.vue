<script lang="ts">
import { defineComponent } from 'vue';
import HomeHeroSection from './HomeHeroSection.vue';
import HomeServicesSection from './HomeServicesSection.vue';
import HomeProjectsSection from './HomeProjectsSection.vue';
import HomeContactSection from './HomeContactSection.vue';

const HomeView = defineComponent({
    name: 'HomeView',
    components: {
        HomeHeroSection,
        HomeServicesSection,
        HomeProjectsSection,
        HomeContactSection
    },
});

export default HomeView;
</script>

<template>
    <HomeHeroSection />
    <HomeServicesSection />
    <HomeProjectsSection />
    <HomeContactSection />
</template>

<style lang="css" scoped>
</style>
