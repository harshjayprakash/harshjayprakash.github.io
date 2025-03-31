<script setup lang="ts">
import DividerWidget from '@/components/DividerWidget.vue';
import SpacerWidget from '@/components/SpacerWidget.vue';

import HomeHeroSection from '@/pages/home/HomeHeroSection.vue';
import HomeContactSection from '@/pages/home/HomeContactSection.vue';
import HomeProjectsSection from '@/pages/home/HomeProjectsSection.vue';
import HomeServicesSection from '@/pages/home/HomeServicesSection.vue';
</script>

<template>
    <HomeHeroSection />
    <DividerWidget />
    <HomeServicesSection />
    <SpacerWidget space="2rem" />
    <DividerWidget />
    <HomeProjectsSection />
    <SpacerWidget space="2rem" />
    <DividerWidget />
    <HomeContactSection />
    <SpacerWidget space="2rem" />
</template>

<style lang="css" scoped>
</style>
