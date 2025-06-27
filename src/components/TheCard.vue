<script lang="ts" setup>
import useLinkable from '@/composables/useLinkable';
import type { CardProps } from '@/types/ui/CardProps';

const props = withDefaults(defineProps<CardProps>(), {
    appearance: 'filled',
    elevate: false,
    to: '#',
    newWindow: false
});

const config = useLinkable(props.linkable, props.to, props.newWindow);
const role = () => props.linkable === 'none' ? 'group' : 'link';
const dataLink = () => props.linkable === 'external' || props.linkable === 'internal';
</script>

<template>
    <component :is="config.is" :href="config.href" :to="config.to" :target="config.target"
        :rel="config.rel" :role="role()" :data-link="dataLink()"
        :data-appearance="props.appearance" class="card"
    >
        <slot></slot>
    </component>
</template>

<style lang="css">
.card {
    padding: 1rem;
    background-color: var(--colour-bk-secondary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    border-radius: var(--rounded-default);
}

.card[data-link="true"]:hover {
    background-color: var(--colour-bk-hover);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>

