<script lang="ts" setup>
import { useProvideTabs } from '@/composables/useTabs';

const { handleKeydown } = useProvideTabs();
</script>

<template>
    <!-- eslint-disable vuejs-accessibility/interactive-supports-focus -->
    <div role="tablist" class="tab-list" @keydown="handleKeydown">
        <slot></slot>
    </div>
</template>

<style lang="css">
.tab-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
