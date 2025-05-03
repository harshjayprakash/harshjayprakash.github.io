<script lang="ts" setup>
import { computed, ref } from 'vue';

import TheBadge from '@/components/TheBadge.vue';
import TheDivider from '@/components/TheDivider.vue';
import TheNav from '@/components/TheNav.vue';
import useMobileDetector from '@/composables/useMobileDetector';
import getMetaData from '@/data/metadata';

const { buildStatus } = getMetaData();
const { isMobile } = useMobileDetector();

const isNavVisibleOnMobile = ref(false);
const navButtonText = computed(() =>
    (isNavVisibleOnMobile.value) ? String.fromCodePoint(10005)
    : String.fromCodePoint(9776)
);

const toggleNav = () => isNavVisibleOnMobile.value = !isNavVisibleOnMobile.value;
</script>

<template>
    <header aria-label="Site Header" class="header">
        <button v-if="isMobile" @click="toggleNav()" class="menu-button">
            {{ navButtonText }}
        </button>
        <span>Harsh.</span>
        <TheBadge variant="outline" colour="highlight" aria-label="Website Build Status">
            {{ buildStatus }}
        </TheBadge>
        <TheDivider
            v-if="!isMobile"
            orientation="vertical"
            :height="1.5"
            :thickness="0.15"
        />
        <TheNav v-if="!isMobile" variant="desktop" />
    </header>
    <TheNav v-if="isMobile && isNavVisibleOnMobile" variant="mobile" @on-link-click="toggleNav" />
</template>

<style lang="css" scoped>
.header {
    background-color: var(--colour-bk-secondary);
    position: sticky;
    top: 1rem;
    display: flex;
    gap: 1rem;
    padding: 1rem;
    max-width: min-content;
    border: 1px solid var(--colour-outline-faded);
    box-shadow: var(--shadow-md);
    place-items: center;
    z-index: 10;
}

.menu-button {
    border: 0;
    background-color: inherit;
}

.menu-button:hover {
    background-color: var(--colour-bk-hover);
}
</style>
