<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
    <TheHeader />
    <main id="main">
        <RouterView />
    </main>
    <TheFooter />
</template>
