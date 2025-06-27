<script lang="ts" setup>
import { linkData } from '@/data/ui/link';
import type { ButtonProps } from '@/types/ui/ButtonProps';

const props = withDefaults(defineProps<ButtonProps>(), {
    linkable: 'internal',
    appearance: 'default',
    newWindow: false
});

const isExternal = () => props.linkable === 'external';

const is = () => isExternal() ? 'a' : 'RouterLink';
const href = () => isExternal() ? props.to : undefined;
const target = () => isExternal()
    ? linkData.newWindowOpenData.target(props.newWindow) : undefined;
const rel = () => isExternal()
    ? linkData.newWindowOpenData.rel(props.newWindow) : undefined;
const to = () => isExternal() ? undefined : props.to;
</script>

<template>
    <component :is="is()" :href="href()" :target="target()" :rel="rel()" :to="to()"
        class="button" :data-appearance="appearance"
    >
        <slot></slot>
    </component>
</template>

<style lang="css" scoped>
.button {
    --widget-button-text: ;
    --widget-button-bk: ;
    --widget-button-outline: ;

    display: inline;
    width: fit-content;
    font-size: smaller;
    background-color: var(--widget-button-bk);
    color: var(--widget-button-text);
    border: 0.1rem solid var(--widget-button-outline);
    padding-inline: 0.75rem;
    padding-block: 0.30rem;
    border-radius: 5px;
    text-decoration: none;
}

.button[data-appearance="default"] {
    --widget-button-text: var(--colour-text-primary);
    --widget-button-bk: var(--colour-bk-primary);
    --widget-button-outline: var(--colour-outline-faded);
}

.button[data-appearance="default"]:hover {
    --widget-button-text: var(--colour-text-primary);
    --widget-button-bk: var(--colour-bk-hover );
}


.button[data-appearance="primary"] {
    --widget-button-text: var(--colour-text-inverted);
    --widget-button-bk: var(--colour-bk-highlight);
    --widget-button-outline: var(--colour-outline-highlight);
}

.button[data-appearance="primary"]:hover {
    --widget-button-text: var(--colour-text-inverted);
    --widget-button-bk: var(--colour-bk-highlight-hover);
    --widget-button-outline: var(--colour-outline-highlight-hover);
}

.button[data-appearance="outline"] {
    --widget-button-text: var(--colour-text-primary);
    --widget-button-bk: inherit;
    --widget-button-outline: var(--colour-outline-faded);
}

.button[data-appearance="outline"]:hover {
    --widget-button-outline: var(--colour-outline-primary);
}


.button[data-appearance="transparent"] {
    --widget-button-text: var(--colour-text-primary);
    --widget-button-bk: inherit;
    --widget-button-outline: transparent;
}


.button[data-appearance="transparent"]:hover {
    --widget-button-text: var(--colour-text-highlight);
    --widget-button-bk: inherit;
    --widget-button-outline: transparent;
}

</style>
