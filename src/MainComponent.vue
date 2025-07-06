<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useTitle } from '@vueuse/core';

import TheHeader from '@/layout/TheHeader.vue';
import TheFooter from '@/layout/TheFooter.vue';
import TheLink from '@/components/TheLink.vue';

const route = useRoute();
const title = computed(() => route.meta.title
    ? `${route.meta.title} - Harsh's Portfolio` : 'Harsh\'s Portfolio'
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
    <TheLink linkable="external" to="#main" class="back-to-top">
        <small class="inner-text">Back to top</small>
    </TheLink>
    <TheFooter />
</template>

<style lang="css">
.content-wrapper {
    padding-block: 3rem 2rem;
}

.back-to-top .inner-text {
    color: var(--colour-text-faded);
}

.skip-nav {
    position: absolute;
    translate: 0 -20rem;
    z-index: 30;
}

.skip-nav:focus {
    position: relative;
    transform: 0 1rem;
    z-index: 15;
}
</style>
