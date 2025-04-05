<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router';

import SurfaceLayout from '@/layouts/SurfaceLayout.vue';
import HeaderWidget from '@/components/HeaderWidget.vue';
import FooterWidget from '@/components/FooterWidget.vue';
import useMobileDetector from '@/composables/useMobileDetector';

const { isMobile } = useMobileDetector();
provide('isMobile', isMobile);
</script>

<template>
    <SurfaceLayout>
        <template #header>
            <HeaderWidget />
        </template>
        <template #default>
            <main>
                <RouterView />
            </main>
        </template>
        <template #footer>
            <FooterWidget />
        </template>
    </SurfaceLayout>
</template>
