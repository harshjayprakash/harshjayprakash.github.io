<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ inheritAttrs: false });

const { variant } = defineProps<{
    variant: 'ghost' | 'outline' | 'tint' | 'filled'
}>();

const styleKlass = computed(() => {
    return {
        'badge--ghost': variant === 'ghost',
        'badge--outline': variant === 'outline',
        'badge--tint': variant === 'tint',
        'badge--filled': variant === 'filled'
    }
});
</script>

<template>
    <div
        role="status"
        class="badge"
        :class="styleKlass"
        v-bind="$attrs"
        v-on="$attrs"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.badge {
    --widget-badge-text: ;
    --widget-badge-bk: ;
    --widget-badge-outline: ;

    display: inline;
    width: fit-content;
    font-size: smaller;
    background-color: var(--widget-badge-bk);
    color: var(--widget-badge-text);
    border: 0.1rem solid var(--widget-badge-outline);
    padding-inline: 0.25rem;
    padding-block: 0.1rem;
}

.badge.badge--ghost {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: inherit;
    --widget-badge-outline: transparent;
}

.badge.badge--outline {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: inherit;
    --widget-badge-outline: var(--colour-outline-highlight);
}

.badge.badge--tint {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: var(--colour-bk-highlight-subtle);
    --widget-badge-outline: var(--colour-outline-highlight-subtle);
}

.badge.badge--filled {
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-bk: var(--colour-bk-highlight);
    --widget-badge-outline: var(--colour-outline-highlight);
}
</style>
