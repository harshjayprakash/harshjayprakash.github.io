<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

const ButtonComponent = defineComponent({
    name: 'ButtonComponent',
    inheritAttrs: false,
    props: {
        variant: {
            type: String as PropType<'standard' | 'accent'>,
            default: 'standard',
        },
    },
    setup(props) {
        return {
            buttonType: props.variant as String,
        };
    }
});

export default ButtonComponent;
</script>

<template>
    <button
        v-bind="$attrs" v-on="$attrs"
        class="button" :class="{
            'button--standard' : buttonType === 'standard',
            'button--accent' : buttonType === 'accent' }"
    >
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.button {
    border: 1px solid black;
    border-radius: var(--bdr-default);
    padding-inline: 0.75rem;
}

.button--standard {
    color: var(--clr-button-standard-text);
    background-color: var(--clr-button-standard-bk);
    border-color: var(--clr-button-standard-border);
}

.button--standard:hover {
    background-color: var(--clr-button-standard-bk-hover);
    border-color: var(--clr-button-standard-border-hover);
}

.button--accent {
    background-color: var(--clr-button-accent-bk);
    color: var(--clr-button-accent-text);
    border-color: var(--clr-button-accent-border);
}

.button--accent:hover {
    background-color: var(--clr-button-accent-bk-hover);
    border-color: var(--clr-button-accent-border-hover);
}
</style>
