<script setup lang="ts">
const props = defineProps<{
    variant: 'internal' | 'external',
    path: string
}>();
</script>

<template>
    <a
        v-if="props.variant === 'external'"
        :href="props.path"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
    >
        <slot></slot>
    </a>
    <RouterLink
        v-if="props.variant === 'internal'"
        :to="props.path" exact
        class="link"
    >
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    --widget-link-underline-hover: var(--colour-underline-primary);

    text-decoration: none;
    color: inherit;
}

.link:hover {
    text-decoration:
        solid underline var(--border-thickness) var(--widget-link-underline-hover);
}
</style>
