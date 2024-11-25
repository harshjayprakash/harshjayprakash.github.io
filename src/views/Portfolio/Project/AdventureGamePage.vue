<template>
    <ArticleComponent>
        <br/>
        <img class="project-image" src="/dev/adv-game-header.jpg" alt="header">
        <br/>
        <h2>Overview</h2>
        <p>
            A project originally started as a college homework assignment for a single
            week, which involved making a text-based adventure game. Original requirements
            involved:
        </p>
        <ul>
            <li>The user must make at least three choices.</li>
            <li>Each choice must have a conclusion for each path.</li>
            <li>Make use of a random element.</li>
            <li>Free to add any additional features.</li>
        </ul>
        <h2>Purpose</h2>
        <p>
            This project was to help continue to develop my programming knowledge. At the
            time, my knowledge was very limited to subroutines in Visual Basic .NET in
            single files.
        </p>
    </ArticleComponent>
</template>

<script lang="ts">
import ArticleComponent from '@/components/ui/ArticleComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AdventureGamePage',
    components: { ArticleComponent },
});
</script>

<style lang="css" scoped>

</style>