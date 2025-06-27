<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import TheHeader from './chrome/TheHeader.vue';
import TheFooter from './chrome/TheFooter.vue';
import { computed } from 'vue';
import { useTitle } from '@vueuse/core';

const route = useRoute();
const title = computed(() => route.meta.title
    ? `${route.meta.title} : : Harsh's Portfolio` : 'Harsh\'s Portfolio'
);
useTitle(title);
</script>

<template>
    <TheHeader />
    <main class="content-wrapper">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style lang="css">
.content-wrapper {
    padding-block: 3rem 2rem;
}
</style>
