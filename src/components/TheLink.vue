<script lang="ts" setup>
defineOptions({
    inheritAttrs: false
});

const { variant, to, exact = false, newWindow = false } = defineProps<{
    variant: 'internal' | 'external',
    to: string,
    exact?: boolean,
    newWindow?: boolean
}>();

const rel = () => (newWindow) ? 'noopener noreferrer' : undefined;
const target = () => (newWindow) ? '_blank' : undefined;
</script>

<template>
    <a v-if="variant === 'external'" :href="to" :rel :target
        class="link"
        v-on="$attrs" v-bind="$attrs"
    >
        <slot></slot>
    </a>
    <RouterLink v-if="variant === 'internal'" :to :exact
        class="link"
        v-on="$attrs" v-bind="$attrs"
    >
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    color: inherit;
    background-color: inherit;
    text-decoration: underline solid var(--colour-outline-primary) 0.05rem;
    text-underline-offset: 2px;
}

.link:hover {
    text-decoration-thickness: 0.1rem;
}
</style>
