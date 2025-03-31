<script setup lang="ts">
import { computed, inject, ref } from 'vue';

import NavLayout from '@/layout/NavLayout.vue';
import BadgeWidget from '@/components/BadgeWidget.vue';
import DividerWidget from '@/components/DividerWidget.vue';
import SpacerWidget from '@/components/SpacerWidget.vue';

const isMobile = inject('isMobile');
const isNavVisible = ref(false);

const menuButtonText = computed(() =>
    (isNavVisible.value) ? String.fromCodePoint(10005) : String.fromCodePoint(9776)
);

const toggleNavigationVisibility = () => {
    isNavVisible.value = !isNavVisible.value;
}
</script>

<template>
    <header class="header" aria-label="Site Header, Contains Navigation">
        <button
            v-if="isMobile"
            class="menu-button"
            @click="toggleNavigationVisibility"
            aria-label="Mobile Menu Navigation Toggle Button"
            :aria-pressed="isNavVisible"
            tabindex="0"
        >
            {{ menuButtonText }}
        </button>
        <span class="title">Harsh.</span>
        <BadgeWidget
            aria-label="Website is Under Construction"
            class="status"
            variant="outline"
        >
            Under Construction
        </BadgeWidget>
        <DividerWidget v-if="!isMobile" variant="vertical" />
        <NavLayout class="nav" v-if="!isMobile" />
    </header>
    <SpacerWidget space="1rem" />
    <NavLayout
        v-if="isNavVisible"
        variant="mobile"
        @on-link-click="toggleNavigationVisibility"
    />
</template>

<style lang="css" scoped>
.header {
    --layout-header-bk: var(--colour-surface-secondary);
    --layout-header-bk-hover: var(--colour-surface-hover);
    --layout-header-shadow: var(--colour-shadow-primary);

    background-color: var(--layout-header-bk);
    position: sticky;
    top: 1rem;
    display: flex;
    width: fit-content;
    padding-block: 0.8rem;
    padding-inline: 1rem;
    box-shadow:
        0 0.25rem 0.375rem -0.0625rem var(--layout-header-shadow),
        0 0.125rem 0.25rem -0.125rem var(--layout-header-shadow);
    border-radius: var(--border-radius-default);
    z-index: 10;
}

.header .title {
    place-self: center;
}

.header .status {
    place-self: center;
    margin-inline-start: 1rem;
}

.header .menu-button {
    border: 0;
    background-color: inherit;
    margin-inline-end: 0.5rem;
    padding-inline: 0.4rem;
}

.header .menu-button:hover {
    background-color: var(--layout-header-bk-hover);
}
</style>
