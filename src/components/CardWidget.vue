<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    variant: 'filled' | 'outline' | 'subtle',
    link: 'none' | 'internal' | 'external'
    elevated: boolean,
    elevateOnHover: boolean,
    fillOnHover: boolean,
    path?: string
}>();

const safePath = computed(() => props.path ?? '#');

const klass = computed(() => {
    return {
        'card--filled': props.variant === 'filled',
        'card--outline': props.variant === 'outline',
        'card--subtle': props.variant === 'subtle',
        'card--elevated': props.elevated,
        'card--elevated-hover': props.elevateOnHover,
        'card--fill-hover': props.fillOnHover
    }
});
</script>

<template>
    <div v-if="props.link === 'none'" role="group" class="card" :class="klass">
        <slot></slot>
    </div>
    <a
        v-if="props.link === 'external'"
        class="card"
        :class="klass"
        :href="safePath"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
    <RouterLink
        v-if="props.link === 'internal'"
        class="card"
        :class="klass"
        :to="safePath"
    >
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.card {
    --widget-card-bk: inherit;
    --widget-card-text: inherit;
    --widget-card-border: inherit;

    padding: 1rem;
    display: block;
    text-decoration: none;
    background-color: var(--widget-card-bk);
    color: var(--widget-card-text);
    border: var(--border-thickness-default) solid var(--widget-card-border);
    border-radius: var(--border-radius-default);
}

.card--subtle {
    --widget-card-bk: inherit;
    --widget-card-text: inherit;
    --widget-card-border: transparent;
}

.card--outline {
    --widget-card-bk: inherit;
    --widget-card-text: inherit;
    --widget-card-border: var(--colour-border-primary);
}

.card--filled {
    --widget-card-bk: var(--colour-surface-secondary);
    --widget-card-text: inherit;
    --widget-card-border: transparent;
}

.card--elevated {
    box-shadow:
        0 4px 6px -1px var(--colour-shadow-primary),
        0 2px 4px -2px var(--colour-shadow-primary);
}

.card--elevated-hover:hover {
    box-shadow:
        0 10px 15px -3px var(--colour-shadow-primary),
        0 4px 6px -4px var(--colour-shadow-primary);
}

.card--fill-hover:hover {
    --widget-card-bk: var(--colour-surface-hover);
}
</style>
