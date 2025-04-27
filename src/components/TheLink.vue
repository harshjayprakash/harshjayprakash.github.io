<script lang="ts" setup>
const { variant, to, exact, newWindow } = defineProps<{
    variant: 'internal' | 'external',
    to: string,
    exact: boolean,
    newWindow: boolean
}>();

const rel = () => (newWindow) ? 'noopener noreferrer' : '';
const target = () => (newWindow) ? '_blank' : '';
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
</style>
