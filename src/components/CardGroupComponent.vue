<script lang="ts">
import { defineComponent } from 'vue';

const CardGroupComponent = defineComponent({
    name: 'CardGroupComponent',
    props: {
        desktopCols: {
            type: Number,
            default: 2,
        },
    },
    setup(props) {
        return {
            cols: props.desktopCols as Number
        };
    }
});

export default CardGroupComponent;
</script>

<template>
    <div class="card-group">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
</style>
