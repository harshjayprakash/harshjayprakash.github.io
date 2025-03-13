<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';

import HomeHeroSection from '@/views/home/HomeHeroSection.vue';
import HomeServicesSection from '@/views/home/HomeServicesSection.vue';
import HomeProjectsSection from '@/views/home/HomeProjectsSection.vue';
import HomeContactSection from '@/views/home/HomeContactSection.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';

const HomeView = defineComponent({
    name: 'HomeView',
    components: {
        HomeHeroSection,
        HomeServicesSection,
        HomeProjectsSection,
        HomeContactSection,
        DividerComponent,
        SpacerComponent,
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
