<script lang="ts" setup>
import useLinkable from '@/composables/useLinkable';
import type { ButtonProps } from '@/types/ui/ButtonProps';

const props = withDefaults(defineProps<ButtonProps>(), {
    linkable: 'internal',
    appearance: 'default',
    newWindow: false
});

const config = useLinkable(props.linkable, props.to, props.newWindow);
</script>

<template>
    <component :is="config.is" :href="config.href" :target="config.target"
        :rel="config.rel" :to="config.to" class="button" :data-appearance="appearance"
        tabindex="0" role="button"
    >
        <slot></slot>
    </component>
</template>

<style lang="css">
.button {
    --widget-button-text: ;
    --widget-button-bk: ;
    --widget-button-outline: ;

    cursor: pointer;
    display: inline;
    width: fit-content;
    font-size: smaller;
    background-color: var(--widget-button-bk);
    color: var(--widget-button-text);
    border: 0.1rem solid var(--widget-button-outline);
    padding-inline: 0.75rem;
    padding-block: 0.30rem;
    border-radius: var(--rounded-default);
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
