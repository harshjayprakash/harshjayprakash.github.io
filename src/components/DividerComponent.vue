<script lang="ts">
import { defineComponent, type PropType } from 'vue';

const DividerComponent = defineComponent({
    name: 'DividerComponent',
    props: {
        variant: {
            type: String as PropType<'vertical' | 'horizontal'>,
            default: 'horizontal',
        },
        vheight: {
            type: String as PropType<String>,
            default: 'auto',
        },
        thickness: {
            type: String as PropType<String>,
            default: '0.1rem',
        }
    },
    setup(props) {

        return {
            direction: props.variant as String,
            vHeight: props.vheight as String,
            wThickness: props.thickness as String,
        }
    }
});

export default DividerComponent;
</script>

<template>
    <hr :class="{
        'v-divider' : direction === 'vertical',
        'h-divider' : direction === 'horizontal',
    }" />
</template>

<style lang="css" scoped>
.h-divider,
.v-divider {
    border: 0;
}

.h-divider {
    border-block-end: v-bind(wThickness) solid grey;
    margin-block: 1rem;
}

.v-divider {
    block-size: v-bind(vHeight);
    border-inline-end: v-bind(wThickness) solid black;
    margin-inline: 1rem;
}
</style>
