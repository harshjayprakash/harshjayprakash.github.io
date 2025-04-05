<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    variant: 'outline' | 'filled' | 'ghost' | 'tint',
    colour: 'primary' | 'highlight'
}>();

const klass = computed(() => {
    return {
        'badge--outline': props.variant === 'outline',
        'badge--filled': props.variant === 'filled',
        'badge--ghost': props.variant === 'ghost',
        'badge--tint': props.variant === 'tint',
        'badge--primary': props.colour === 'primary',
        'badge--highlight': props.colour === 'highlight'
    }
});
</script>

<template>
    <div role="status" class="badge" :class="klass">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.badge {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: inherit;

    display: inline;
    padding-inline: 0.5rem;
    padding-block: 0.2rem;
    background-color: var(--widget-badge-bk);
    color: var(--widget-badge-text);
    border-radius: var(--border-radius-default);
    font-size: small;
    border: var(--border-thickness) solid var(--widget-badge-border);
}

.badge--outline.badge--highlight {
    --widget-badge-bk: inherit;
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-border: var(--colour-border-highlight);
}

.badge--filled.badge--highlight {
    --widget-badge-bk: var(--colour-surface-highlight);
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-border: transparent;
}

.badge--ghost.badge--highlight {
    --widget-badge-bk: inherit;
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-border: transparent;
}

.badge--tint.badge--highlight {
    --widget-badge-bk: var(--colour-surface-highlight-subtle);
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-border: var(--colour-border-highlight-subtle);
}

.badge--outline.badge--primary {
    --widget-badge-bk: inherit;
    --widget-badge-text: inherit;
    --widget-badge-border: var(--colour-border-primary);
}

.badge--filled.badge--primary {
    --widget-badge-bk: var(--colour-surface-inverted);
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-border: transparent;
}

.badge--ghost.badge--primary {
    --widget-badge-bk: inherit;
    --widget-badge-text: var(--colour-text-primary);
    --widget-badge-border: transparent;
}

.badge--tint.badge--primary {
    --widget-badge-bk: var(--colour-surface-hover);
    --widget-badge-text: inherit;
    --widget-badge-border: var(--colour-border-faded);
}


</style>
