<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    variant?: 'filled' | 'ghost' | 'outline' | 'tint'
}>();

const safeVariant = computed(() => props.variant ?? 'filled');
</script>

<template>
    <div
        class="badge" :class="{
            'badge--filled': safeVariant === 'filled',
            'badge--ghost': safeVariant === 'ghost',
            'badge--outline': safeVariant === 'outline',
            'badge--tint': safeVariant === 'tint',
        }"
        role="status"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.badge {
    --widget-badge-bk: ;
    --widget-badge-text: ;
    --widget-badge-border: ;

    background-color: var(--widget-badge-bk);
    color: var(--widget-badge-text);
    border-radius: var(--border-radius-default);
    border: var(--border-thickness) solid var(--widget-badge-border);
    padding-inline: 0.3rem;
    font-size: small;
    width: fit-content;
}

.badge--outline {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: var(--colour-border-primary);
}

.badge--filled {
    --widget-badge-bk: var(--colour-surface-highlight);
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-border: var(--colour-border-highlight);
}

.badge--ghost {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: transparent;
}

.badge--tint {
    --widget-badge-bk: var(--colour-surface-highlight-subtle);
    --widget-badge-text: inherit;
    --widget-badge-border: var(--colour-border-highlight);
}
</style>
