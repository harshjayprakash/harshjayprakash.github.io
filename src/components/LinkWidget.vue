<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    variant?: 'internal' | 'external',
    path?: string
}>();

const safeVariant = computed(() => props.variant ?? 'internal');
const safePath = computed(() => props.path ?? '#');
</script>

<template>
    <a
        v-if="safeVariant === 'external'"
        :href="safePath"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
    <RouterLink
        v-if="safeVariant === 'internal'"
        :to="safePath" exact
        class="link"
    >
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    --widget-link-underline-hover: var(--clr-outline-primary);

    text-decoration: none;
    color: inherit;
}

.link:hover {
    text-decoration: solid underline 0.1rem var(--widget-link-underline-hover);
}
</style>
