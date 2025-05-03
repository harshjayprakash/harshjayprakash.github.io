<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
    <a href="#main" class="skip-nav">Skip Navigation </a>
    <TheHeader />
    <main id="main">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style lang="css" scoped>
#main {
    padding-block: 2.5rem;
}

.skip-nav {
    position: absolute;
    padding: 1rem;
    background-color: var(--colour-bk-highlight-lightest);
    translate: 0 -20rem;
    text-decoration: underline solid 0.2rem var(--colour-outline-highlight-lighter);
    text-transform: uppercase;
    color: inherit;
    box-shadow: var(--shadow-lg);
}

.skip-nav:focus {
    translate: 0 1rem;
    z-index: 15;
}
</style>
