<script lang="ts">
import { defineComponent, type PropType } from 'vue';

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
    border-radius: 0.3rem;
    padding-inline: 0.75rem;
}

.button--standard {
    color: var(--clr-on-surface);
    background-color: var(--clr-surface-container-low);
    border-color: var(--clr-outline);
}

.button--standard:hover {
    background-color: var(--clr-surface-container);
}

.button--accent {
    background-color: var(--clr-accent-container-highest);
    color: var(--clr-on-accent);
    border-color: var(--clr-accent-container);
}

.button--accent:hover {
    background-color: var(--clr-accent-container);
}
</style>
