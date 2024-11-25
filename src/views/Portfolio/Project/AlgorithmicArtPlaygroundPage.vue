<template>
    <ArticleComponent>
        <br/>
        <h2>Overview</h2>
        <p>A project part of my Undergraduate Computer Science Degree</p>
        <h2>Purpose</h2>
    </ArticleComponent>
</template>

<script lang="ts">
import ArticleComponent from '@/components/ui/ArticleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AlgorithmicArtPlaygroundPage',
    components: { ArticleComponent },
});
</script>

<style lang="css" scoped>

</style>