<script lang="ts" setup>
import { useProvideTabs } from '@/composables/useTabs';
import type { TabListProps } from '@/types/ui/TabListProps';

const props = withDefaults(defineProps<TabListProps>(), {
    clickOnFocus: false
});

const { handleKeydown } = useProvideTabs(props.clickOnFocus);
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
