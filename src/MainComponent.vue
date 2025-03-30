<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router';

import FooterComponent from '@/layout/FooterComponent.vue';
import HeaderComponent from '@/layout/HeaderComponent.vue';
import SurfaceLayout from '@/layout/SurfaceLayout.vue';

import useMobileDetector from '@/composables/useMobileDetector';

const { isMobile, windowWidth } = useMobileDetector();
provide('isMobile', isMobile);
provide('windowWidth', windowWidth);
</script>

<template>
    <SurfaceLayout>
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
    </SurfaceLayout>
</template>

<style lang="css" scoped>
</style>
