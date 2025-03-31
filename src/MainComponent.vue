<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router';

import FooterLayout from '@/layout/FooterLayout.vue';
import SurfaceLayout from '@/layout/SurfaceLayout.vue';
import HeaderLayout from '@/layout/HeaderLayout.vue';

import useMobileDetector from '@/composables/useMobileDetector';

const { isMobile, windowWidth } = useMobileDetector();
provide('isMobile', isMobile);
provide('windowWidth', windowWidth);
</script>

<template>
    <SurfaceLayout>
        <template #header>
            <HeaderLayout />
        </template>
        <template #default>
            <main>
                <RouterView />
            </main>
        </template>
        <template #footer>
            <FooterLayout />
        </template>
    </SurfaceLayout>
</template>

<style lang="css" scoped>
</style>
