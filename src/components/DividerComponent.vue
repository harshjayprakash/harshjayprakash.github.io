<script lang="ts">
import { defineComponent } from 'vue';

const DividerComponent = defineComponent({
    name: 'DividerComponent',
    props: {
        variant: {
            type: String,
            default: 'horizontal',
            validator(value: String) {
                return ['horizontal', 'vertical'].includes(value.toString());
            }
        },
        vheight: {
            type: String,
            default: 'auto',
        },
        thickness: {
            type: String,
            default: '0.1rem',
        },
        spacing: {
            type: String,
            default: '1rem',
        }
    },
    setup(props) {
        return { props };
    }
});

export default DividerComponent;
</script>

<template>
    <hr v-bind:class="{
        'v-divider' : props.variant === 'vertical',
        'h-divider' : props.variant === 'horizontal',
    }" />
</template>

<style lang="css" scoped>
.h-divider,
.v-divider {
    --def-thickness: v-bind(props.thickness);
    --def-vheight: v-bind(props.vheight);
    --def-spacing: v-bind(props.spacing);
    border: 0;
}

.h-divider {
    border-block-end: var(--def-thickness) solid var(--clr-divider);
    margin-block: var(--def-spacing);
}

.v-divider {
    block-size: var(--def-vheight);
    border-inline-end: var(--def-thickness) solid var(--clr-divider);
    margin-inline: var(--def-spacing);
}
</style>
