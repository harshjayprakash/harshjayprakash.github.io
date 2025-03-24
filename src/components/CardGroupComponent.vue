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
        return { props };
    }
});

export default CardGroupComponent;
</script>

<template>
    <ul class="card-group">
        <slot></slot>
    </ul>
</template>

<style lang="css" scoped>
.card-group {
    display: grid;
    gap: 1rem;
    padding: 0;
}

@media screen and (min-width: 768px) {
    .card-group {
        --defcols: v-bind(props.desktopCols);
        grid-template-columns: repeat(var(--defcols), 1fr);
    }
}
</style>
