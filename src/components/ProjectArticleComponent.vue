<template>
    <section class="project-article">
        <slot></slot>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectArticleComponent'
});
</script>

<style lang="css" scoped>
</style>
