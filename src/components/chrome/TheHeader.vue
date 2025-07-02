<script setup lang="ts">
import TheNav from '@/components/chrome/TheNav.vue';
import TheDivider from '@/components/common/TheDivider.vue';
import TheBadge from '@/components/common/TheBadge.vue';
import useMobileDetector from '@/composables/useMobileDetector';
import { sizeConstraints } from '@/data/ui/size';
import { metaData } from '@/data/meta';

const { isMobile } = useMobileDetector(sizeConstraints.mobileBreakpoint);
</script>

<template>
    <header class="header" aria-label="Site Header">
        <span class="title">Harsh.</span>
        <TheBadge appearance="tint" colour="primary" aria-label="Website Build Status">
            {{ metaData.buildStatus }}
        </TheBadge>
        <TheDivider v-if="!isMobile" orientation="vertical" :height="1.5"
            :thickness="0.15" />
        <TheNav variant="desktop" v-if="!isMobile" />
    </header>
    <div class="nav-mobile-wrapper" v-if="isMobile">
        <TheNav variant="mobile" />
    </div>
</template>

<style lang="css">
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
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--colour-outline-faded);
    z-index: 10;
}

.header .title {
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
    z-index: 10;
}
</style>
