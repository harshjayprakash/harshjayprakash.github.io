<script lang="ts" setup>
defineOptions({
    inheritAttrs: false
});

const { variant, appearance, to, exact = false, newWindow = false } = defineProps<{
    variant: 'internal' | 'external',
    appearance: 'default' | 'primary' | 'outline' | 'subtle' | 'transparent',
    to: string,
    exact?: boolean,
    newWindow?: boolean
}>();

const rel = () => (newWindow) ? 'noopener noreferrer' : undefined;
const target = () => (newWindow) ? '_blank' : undefined;
</script>

<template>
    <a v-if="variant === 'external'" :href="to" :rel :target
        class="button" :data-appearance="appearance"
        v-on="$attrs" v-bind="$attrs"
    >
        <slot></slot>
    </a>
    <RouterLink v-if="variant === 'internal'" :to :exact
        class="button" :data-appearance="appearance"
        v-on="$attrs" v-bind="$attrs"
    >
        <slot></slot>
    </RouterLink>
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
