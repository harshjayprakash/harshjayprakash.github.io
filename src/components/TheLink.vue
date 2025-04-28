<script lang="ts" setup>
const { variant, to, exact, newWindow } = defineProps<{
    variant: 'internal' | 'external',
    to: string,
    exact: boolean,
    newWindow: boolean
}>();

const rel = () => (newWindow) ? 'noopener noreferrer' : undefined;
const target = () => (newWindow) ? '_blank' : undefined;
</script>

<template>
    <a v-if="variant === 'external'" :href="to" :rel :target class="link">
        <slot></slot>
    </a>
    <RouterLink v-if="variant === 'internal'" :to :exact class="link">
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    --widget-link-underline-width: 0.1rem;
    --widget-link-underline-colour: var(--colour-outline-highlight-lighter);

    color: inherit;
    background-color: inherit;
    text-decoration:
        underline solid
        var(--widget-link-underline-colour)
        var(--widget-link-underline-width);
}

.link:hover {
    --widget-link-underline-width: 0.2rem;
}
</style>
