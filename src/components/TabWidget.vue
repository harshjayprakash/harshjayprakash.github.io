<script setup lang="ts">
import { computed, inject } from 'vue';

const props = defineProps<{
    isActive?: boolean
}>();

const safeIsActive = computed(() => props.isActive ?? false);
const tabControlStyle = inject('tabControlStyle');
</script>

<template>
    <button
        class="tab"
        :class="{
            'tab--filled': tabControlStyle === 'filled',
            'tab--filled--active': tabControlStyle === 'filled' && safeIsActive,
            'tab--underline': tabControlStyle === 'underline',
            'tab--underline--active': tabControlStyle === 'underline' && safeIsActive
        }"
        role="tab"
        :aria-selected="safeIsActive"
    >
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.tab {
    border: 0;
    background-color: var(--widget-tab-bk);
    color: var(--widget-tab-text);
}

.tab--underline {
    --widget-tab-bk: inherit;
    --widget-tab-text: inherit;
    --widget-tab-border-default: transparent;
    --widget-tab-border-hover: var(--colour-border-hover);
    --widget-tab-border-active: var(--colour-border-highlight);
    --widget-tab-border: var(--widget-tab-border-default);

    border-block-end: var(--border-thickness-state) solid var(--widget-tab-border);
}

.tab--underline:hover {
    --widget-tab-border: var(--widget-tab-border-hover);
}

.tab--underline--active,
.tab--filled--active {
    font-weight: 500;
}

.tab--underline--active {
    --widget-tab-border: var(--widget-tab-border-active);
}

.tab--filled {
    --widget-tab-bk-default: var(--colour-surface-secondary);
    --widget-tab-bk-hover: var(--colour-surface-hover);
    --widget-tab-bk-active: var(--colour-surface-highlight);
    --widget-tab-bk: var(--widget-tab-bk-default);
    --widget-tab-text-default: var(--colour-text-primary);
    --widget-tab-text-active: var(--colour-text-inverted);
    --widget-tab-text: var(--widget-tab-text-default);

    padding-inline: 0.5rem;
}

.tab--filled:hover {
    --widget-tab-bk: var(--widget-tab-bk-hover);
}

.tab--filled--active {
    --widget-tab-bk: var(--widget-tab-bk-active);
    --widget-tab-text: var(--widget-tab-text-active);
}
</style>
