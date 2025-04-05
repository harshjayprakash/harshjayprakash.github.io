<script setup lang="ts">
import { computed, inject } from 'vue';

const props = defineProps<{
    isSelected: boolean
}>();

const injectedVariant = inject<'underline' | 'filled'>('tabVariant');
const injectedOrientation = inject<'horizontal' | 'vertical'>('tabOrientation');

const klass = computed(() => {
    return {
        'tab--underline': injectedVariant === 'underline',
        'tab--filled': injectedVariant === 'filled',
        'tab--horizontal': injectedOrientation === 'horizontal',
        'tab--vertical': injectedOrientation === 'vertical',
        'tab--active': props.isSelected
    }
});
</script>

<template>
    <button role="tab" class="tab" :class="klass">
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.tab {
    --widget-tab-padding-inline: ;
    --widget-tab-padding-block: ;
    --widget-tab-border: ;
    --widget-tab-bk: ;
    --widget-tab-text: ;

    display: inline;
    width: fit-content;
    border: 0;
    color: var(--widget-tab-text);
    background-color: var(--widget-tab-bk);
    padding-inline: var(--widget-tab-padding-inline);
    padding-block: var(--widget-tab-padding-block);
}

.tab--filled {
    --widget-tab-padding-inline: 0.5rem;
    --widget-tab-padding-block: 0.25rem;
}

.tab--horizontal.tab--underline {
    --widget-tab-padding-block: 0.25rem;
}

.tab--vertical.tab--underline {
    --widget-tab-padding-inline: 1rem;
}

.tab--underline {
    --widget-tab-border: transparent;
    --widget-tab-bk: inherit;
    --widget-tab-text: inherit;
}

.tab--underline:hover {
    --widget-tab-border: var(--colour-surface-hover);
}

.tab--underline.tab--active {
    --widget-tab-border: var(--colour-surface-highlight);
}

.tab--filled {
    --widget-tab-border: transparent;
    --widget-tab-bk: inherit;
    --widget-tab-text: inherit;
}

.tab--filled:hover {
    --widget-tab-bk: var(--colour-surface-hover);
}

.tab--filled.tab--active {
    --widget-tab-bk: var(--colour-surface-highlight);
    --widget-tab-text: var(--colour-text-inverted);
}

.tab--vertical.tab--underline {
    border-inline-start: var(--border-thickness-state) solid var(--widget-tab-border);
}

.tab--horizontal.tab--underline {
    border-block-end: var(--border-thickness-state) solid var(--widget-tab-border);
}
</style>
