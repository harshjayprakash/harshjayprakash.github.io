<script lang="ts" setup>
import type { TabProps } from '@/types/ui/TabProps';

const props = defineProps<TabProps>();
</script>

<template>
    <button role="tab" class="tab" :aria-selected="props.active">
        <slot></slot>
    </button>
</template>

<style lang="css">
.tab {
    --widget-tab-border-colour: transparent;

    position: relative;
    border: 0;
    background-color: inherit;
    padding: 0;
}

.tab::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background-color: var(--widget-tab-border-colour);
    border-radius: var(--rounded-default);
    bottom: -0.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.tab:hover {
    cursor: pointer;
}

.tab[aria-selected="false"]:hover {
    --widget-tab-border-colour: var(--colour-outline-hover);
}

.tab[aria-selected="true"] {
    --widget-tab-border-colour: var(--colour-outline-highlight-lighter);
}
</style>
