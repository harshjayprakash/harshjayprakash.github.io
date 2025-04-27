<script lang="ts" setup>
import getMetaData from '@/data/metadata';
import TheBadge from './TheBadge.vue';
const { buildStatus } = getMetaData();
</script>

<template>
    <header aria-label="Site Header" class="header">
        <span>Harsh.</span>
        <TheBadge variant="outline" >
            {{ buildStatus }}
        </TheBadge>
    </header>
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
    box-shadow: var(--shadow-lg);
    place-items: center;
    z-index: 10;
}
</style>
