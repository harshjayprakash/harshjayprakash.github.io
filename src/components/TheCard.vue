<script lang="ts" setup>
const { link, to = '#', exact = false, newWindow = false } = defineProps<{
    link: 'no-link' | 'internal' | 'external',
    newWindow?: boolean,
    exact?: boolean,
    to?: string
}>();

const rel = () => (newWindow) ? 'noopener noreferrer' : undefined;
const target = () => (newWindow) ? '_blank' : undefined;
</script>

<template>
    <div v-if="link === 'no-link'" role="group" class="card" data-link="false">
        <slot></slot>
    </div>
    <a v-if="link === 'external'" class="card" :href="to" :rel :target data-link="true">
        <slot></slot>
    </a>
    <RouterLink v-if="link === 'internal'" :to :exact data-link="true">
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.card {
    padding: 1rem;
    background-color: var(--colour-bk-secondary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
}

.card[data-link="true"]:hover {
    background-color: var(--colour-bk-hover);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    scale: 101%;
}
</style>

