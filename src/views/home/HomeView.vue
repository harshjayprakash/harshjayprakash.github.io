<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';

import HomeHeroSection from '@/views/home/HomeHeroSection.vue';
import HomeContactSection from '@/views/home/HomeContactSection.vue';
import HomeProjectsSection from '@/views/home/HomeProjectsSection.vue';
import HomeServicesSection from '@/views/home/HomeServicesSection.vue';

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
