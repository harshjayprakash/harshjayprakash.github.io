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
    <div v-if="props.link === 'none'" role="region" class="card" :class="klass">
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
    --widget-card-bk: var(--colour-surface-secondary);
    --widget-card-bk-hover: var(--colour-surface-hover);
    --widget-card-shadow: var(--colour-shadow-primary);

    background-color: var(--widget-card-bk);
    border-radius: var(--border-radius-default);
    list-style-type: none;
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    padding: 1rem;
}

.card--standard {
    padding: 1rem;
}

.card--linkable:hover {
    box-shadow:
        0 10px 15px -3px var(--widget-card-shadow),
        0 4px 6px -4px var(--widget-card-shadow);
    background-color: var(--widget-card-bk-hover);
    scale: 101%;
}
</style>
