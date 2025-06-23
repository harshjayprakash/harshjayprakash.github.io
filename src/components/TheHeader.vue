<script setup lang="ts">
import useMobileDetector from '@/composables/useMobileDetector';
import TheDivider from './TheDivider.vue';
import getSizeConstraints from '@/data/sizing';
import TheNav from './TheNav.vue';

const { mobileBreakpoint } = getSizeConstraints();
const { isMobile } = useMobileDetector(mobileBreakpoint)

</script>

<template>
    <header class="header" aria-label="Site Header">
        <span class="name">Harsh.</span>
        <TheDivider
            v-if="!isMobile"
            orientation="vertical"
            :height="1.5"
            :thickness="0.15"
        />
        <TheNav variant="desktop" v-if="!isMobile" />
    </header>
    <div class="nav-mobile-wrapper" v-if="isMobile" >
        <TheNav variant="mobile" />
    </div>
</template>

<style lang="css" scoped>
.header {
    display: flex;
    background-color: var(--colour-bk-secondary);
    padding: 0.5rem 1rem;
    max-width: min-content;
    position: sticky;
    top: 1rem;
    place-items: center;
    gap: 0.5rem;
    border-radius: var(--rounded-default);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--colour-outline-faded);
}

.name {
    padding-inline-end: 0.25rem;
}

.nav-mobile-wrapper {
    position: fixed;
    bottom: 1.5rem;
    display: flex;
    place-content: center;
    place-items: center;
    left: 0;
    right: 0;
}
</style>
