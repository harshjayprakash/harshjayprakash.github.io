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
    border-radius: var(--bdr-default);
    border: 0.1rem solid var(--widget-badge-border);
    padding-inline: 0.3rem;
    font-size: small;
}

.badge--outline {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: var(--clr-text-primary);
}

.badge--filled {
    --widget-badge-bk: var(--clr-surface-tertiary);
    --widget-badge-text: var(--clr-text-inverted);
    --widget-badge-border: var(--clr-surface-tertiary);
}

.badge--ghost {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: transparent;
}

.badge--tint {
    --widget-badge-bk: var(--clr-surface-glow);
    --widget-badge-text: inherit;
    --widget-badge-border: var(--clr-outline-active);
}
</style>
