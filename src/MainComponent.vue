<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import TheHeader from './components/chrome/TheHeader.vue';
import TheFooter from './components/chrome/TheFooter.vue';
import { computed } from 'vue';
import { useTitle } from '@vueuse/core';
import TheLink from './components/common/TheLink.vue';

const route = useRoute();
const title = computed(() => route.meta.title
    ? `${route.meta.title} : : Harsh's Portfolio` : 'Harsh\'s Portfolio'
);
useTitle(title);
</script>

<template>
    <TheLink class="skip-nav" linkable="external" to="#main">
        skip to main content
    </TheLink>
    <TheHeader />
    <main class="content-wrapper" id="main">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style lang="css">
.content-wrapper {
    padding-block: 3rem 2rem;
}

.skip-nav {
    position: absolute;
    translate: 0 -20rem;
    /* padding-block: 1rem; */
    z-index: 30;
}

.skip-nav:focus {
    position: relative;
    transform: 0 1rem;
    z-index: 15;
}
</style>
