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
const tabIndex = () => dataLink() ? 0 : -1;
</script>

<template>
    <component :is="config.is" :href="config.href" :to="config.to" :target="config.target"
        :rel="config.rel" :role="role()" :data-link="dataLink()" :tabindex="tabIndex()"
        :data-appearance="props.appearance" :data-elevate="props.elevate" class="card"
    >
        <slot></slot>
    </component>
</template>

<style lang="css">
.card {
    --widget-card-bk: ;
    --widget-card-text: ;
    --widget-card-border: ;
    --widget-card-shadow: ;

    background-color: var(--widget-card-bk);
    box-shadow: var(--widget-card-shadow);
    display: block;
    text-decoration: none;
    padding: 1rem;
    color: var(--widget-card-text);
    border: 1px solid var(--widget-card-border);
    border-radius: var(--rounded-default);
}

.card[data-appearance='outline'] {
    --widget-card-bk: inherit;
    --widget-card-text: inherit;
    --widget-card-border: var(--colour-outline-faded);
}

.card[data-appearance='outline'][data-link='true']:hover {
    --widget-card-border: var(--colour-outline-primary);
}

.card[data-appearance='subtle'] {
    --widget-card-bk: inherit;
    --widget-card-text: inherit;
    --widget-card-border: 0;
}

.card[data-appearance='filled'] {
    --widget-card-bk: var(--colour-bk-secondary);
    --widget-card-text: inherit;
    --widget-card-border: 0;
}

.card[data-elevate='true'] {
    --widget-card-shadow: var(--shadow-md);
}

.card[data-link="true"]:hover {
    --widget-card-bk: var(--colour-bk-hover);
    --widget-card-shadow: var(--shadow-lg);
}
</style>

