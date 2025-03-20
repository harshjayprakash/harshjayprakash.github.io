<script lang="ts">
import { defineComponent } from 'vue';

const ButtonComponent = defineComponent({
    name: 'ButtonComponent',
    inheritAttrs: false,
    props: {
        variant: {
            type: String,
            default: 'standard',
            validator(value: String) {
                return ['standard', 'accent'].includes(value.toString());
            }
        },
    },
    setup(props) {
        return { props };
    }
});

export default ButtonComponent;
</script>

<template>
    <button
        class="button"
        v-bind="$attrs"
        v-on="$attrs"
        v-bind:class="{
            'button--standard' : props.variant === 'standard',
            'button--accent' : props.variant === 'accent' }"
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
