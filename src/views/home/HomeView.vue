<script lang="ts">
import { defineComponent } from 'vue';
import HomeHeroSection from './HomeHeroSection.vue';
import HomeServicesSection from './HomeServicesSection.vue';
import HomeProjectsSection from './HomeProjectsSection.vue';
import HomeContactSection from './HomeContactSection.vue';
import DividerComponent from '@/components/DividerComponent.vue';

const HomeView = defineComponent({
    name: 'HomeView',
    components: {
        HomeHeroSection,
        HomeServicesSection,
        HomeProjectsSection,
        HomeContactSection,
        DividerComponent,
    },
});

export default HomeView;
</script>

<template>
    <HomeHeroSection />
    <DividerComponent />
    <HomeServicesSection />
    <DividerComponent />
    <HomeProjectsSection />
    <DividerComponent />
    <HomeContactSection />
</template>

<style lang="css" scoped>
</style>
