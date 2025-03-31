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
    --widget-tab-bk: var(--clr-surface-primary);
    --widget-tab-bk-hover: var(--clr-surface-secondary-hover);
    --widget-tab-bk-active: var(--clr-surface-tertiary);
    --widget-tab-text-active: var(--clr-text-inverted);

    border: 0;
}

.tab--filled {
    border-radius: var(--bdr-default);
    background-color: var(--widget-tab-bk);
    padding-inline: 0.5rem;
}

.tab--filled:hover {
    background-color: var(--widget-tab-bk-hover);
    color: inherit;
}

.tab--filled--active {
    background-color: var(--widget-tab-bk-active);
    color: var(--widget-tab-text-active);
}

.tab--underline {
    background-color: inherit;
    border-block-end: 0.2rem solid var(--widget-tab-bk);
    margin-inline: 0.25rem;
}

.tab--underline:hover {
    border-block-end-color: var(--widget-tab-bk-hover);
}

.tab--underline--active {
    border-block-end-color: var(--widget-tab-bk-active);
}

.tab--filled--active,
.tab--underline--active {
    font-weight: 500;
}
</style>
