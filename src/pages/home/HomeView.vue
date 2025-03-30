<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/data/DividerComponent.vue';
import SpacerComponent from '@/components/layout/SpacerComponent.vue';

import HomeHeroSection from '@/pages/home/HomeHeroSection.vue';
import HomeContactSection from '@/pages/home/HomeContactSection.vue';
import HomeProjectsSection from '@/pages/home/HomeProjectsSection.vue';
import HomeServicesSection from '@/pages/home/HomeServicesSection.vue';

const HomeView = defineComponent({
    name: 'HomeView',
    components: {
        DividerComponent,
        SpacerComponent,
        HomeHeroSection,
        HomeContactSection,
        HomeProjectsSection,
        HomeServicesSection,
    },
});

export default HomeView;
</script>

<template>
    <HomeHeroSection />
    <DividerComponent />
    <HomeServicesSection />
    <SpacerComponent space="2rem" />
    <DividerComponent />
    <HomeProjectsSection />
    <SpacerComponent space="2rem" />
    <DividerComponent />
    <HomeContactSection />
    <SpacerComponent space="2rem" />
</template>

<style lang="css" scoped>
</style>
