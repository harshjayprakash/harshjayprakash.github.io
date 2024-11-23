<template>
    <section class="project-content">
        <h2>Overview</h2>
        <p>
            A project originally started as a college homework assignment for a single
            week, which involved making an adventure game. Original requirements involved:
        </p>
        <ul>
            <li>The user must make at least three choices.</li>
            <li>Each choice must have a conclusion for each path.</li>
            <li>Make use of a random element.</li>
            <li>Free to add any additional features.</li>
        </ul>
        <h2>Purpose</h2>
        <p>
            This project was to help continue to develop my programming knowledg. At the
            time, my knowledge was very limited to subroutines in Visual Basic .NET in
            single module files.
        </p>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AdventureGamePage'
});
</script>

<style lang="css" scoped>
.project-content {
    padding: 1rem 0;
}
</style>