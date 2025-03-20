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
    <section class="card-group">
        <slot></slot>
    </section>
</template>

<style lang="css" scoped>
.card-group {
    display: grid;
    gap: 1rem;
}

@media screen and (min-width: 768px) {
    .card-group {
        --defcols: v-bind(props.desktopCols);
        grid-template-columns: repeat(var(--defcols), 1fr);
    }
}
</style>
