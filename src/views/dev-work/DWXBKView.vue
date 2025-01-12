<template>
    <ProjectArticleComponent />
    <section class="article-content">
        <h2>Overview</h2>
        <p>
            "Experimental Blok" is a small game designed and developed using the Windows
            API in C. While this project does not aim to solve a specific problem, it
            offers a valuable learning experience by building fundational skills in C and
            system-level development.
        </p>
        <p>
            This game provides a top-down view of a maze. The player ("movable box") moves
            using arrow keys on the keyboard, avoiding the walls ("obstructable boxes").
        </p>
        <p>
            The user interface involves using distinct layers to encapsulate
            functionality. This is shown in the diagram below:
        </p>
        <h2>The Component Model Layers</h2>
        <img src="/img/dev/xbk-layers.png" alt="blok component layers">
        <p>
            The "Native Window" Layer is the base layer provided by the Windows API. This
            is the surface where all the components are painted.
        </p>
        <p>
            The "Canvas Grid" Layer provides a blank, grid system for marking boxes, which
            the user interacts with the arrow keys. The user can click on this area to
            create the walls.
        </p>
        <p>
            The "Panel" Layer provides controls
        </p>
        <h2>Development History</h2>
        <h3></h3>
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
