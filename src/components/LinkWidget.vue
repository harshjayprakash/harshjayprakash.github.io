<script lang="ts" setup>
const props = defineProps<{
    variant: 'internal' | 'external' | 'external-same-window',
    path: string
}>();
</script>

<template>
    <a
        v-if="props.variant === 'external' || props.variant === 'external-same-window'"
        :href="props.path"
        :rel="props.variant === 'external' ? 'noopener noreferrer' : ''"
        :target="props.variant === 'external' ? '_blank' : ''"
        class="link"
    >
        <slot></slot>
    </a>
    <RouterLink
        v-if="props.variant === 'internal'"
        :exact="false" :to="props.path"
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
    text-decoration: solid underline var(--border-thickness-default) var(--widget-link-underline-hover);
}
</style>
