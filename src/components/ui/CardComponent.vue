<template>
    <article class="hx-card">
        <slot></slot>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CardComponent'
});
</script>

<style lang="css" scoped>
.hx-card {
    background-color: var(--clr-surface-container);
    padding: 1rem;
}
</style>