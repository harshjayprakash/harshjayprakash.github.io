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
        <span>H.</span>
        <TheDivider
            v-if="!isMobile"
            orientation="vertical"
            :height="1.5"
            :thickness="0.15"
        />
        <TheNav variant="desktop" />
    </header>
    <div class="nav-mobile-wrapper" >
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
    border-radius: var(--rounded-default);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--colour-outline-faded);
}

.nav-mobile-wrapper {
    position: fixed;
    bottom: 0.75rem;
    width: 100%;
    display: flex;
    place-content: center;
    place-items: center;
}
</style>
