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
</script>

<template>
    <li class="card" :class="{
        'card--standard': safeVariant === 'standard',
        'card--linkable': safeVariant === 'internal-link'
            || safeVariant === 'external-link'
    }">
        <RouterLink
            v-if="safeVariant === 'internal-link'"
            :to="safePath" exact
            class="card-link"
        >
            <slot></slot>
        </RouterLink>
        <a
            v-if="safeVariant === 'external-link'"
            :href="safePath"
            target="_blank" rel="noopener noreferrer"
            class="card-link"
        >
            <slot></slot>
        </a>
        <slot v-if="safeVariant === 'standard'"></slot>
    </li>
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
