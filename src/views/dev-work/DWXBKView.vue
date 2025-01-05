<template>
    <ProjectArticleComponent />
    <section class="article-content">
        <h2>Overview</h2>
        <p>
            This is a small game
        </p>
        <h2>The Why.</h2>
        <h2>The How.</h2>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProjectArticleComponent from '@/components/ProjectArticleComponent.vue';

export default defineComponent({
    name: 'DWXBKView',
    components: { ProjectArticleComponent }
});
</script>

<style lang="css" scoped>

</style>
