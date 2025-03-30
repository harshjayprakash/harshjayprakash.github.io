<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router';

import FooterComponent from '@/layout/FooterComponent.vue';
import HeaderComponent from '@/layout/HeaderComponent.vue';
import SurfaceComponent from '@/layout/SurfaceComponent.vue';

import useMobileDetector from '@/composables/useMobileDetector';

const { isMobile, windowWidth } = useMobileDetector();
provide('isMobile', isMobile);
provide('windowWidth', windowWidth);
</script>

<template>
    <SurfaceComponent>
        <template #header>
            <HeaderComponent />
        </template>
        <template #default>
            <main>
                <RouterView />
            </main>
        </template>
        <template #footer>
            <FooterComponent />
        </template>
    </SurfaceComponent>
</template>

<style lang="css" scoped>
</style>
