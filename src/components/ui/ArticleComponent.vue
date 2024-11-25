<template>
    <article class="hx-article">
        <slot></slot>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArticleComponent',
});
</script>

<style lang="css" scoped>
.hx-article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

:slotted(h2) {
    font-weight: 500;
    font-size: 1.25rem;
}
</style>