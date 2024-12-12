<template>
    <section class="dev-projects">
        <h2 class="dev-projects__title">Developer Portfolio Highlights.</h2>
        <p class="dev-projects__context">
            Below show some of my recent projects.
        </p>
        <div class="dev-projects__container">
            <RouterLink 
                class="dev-project"
                v-for="project in devProjectsToShow"
                :to="'/portfolio/dev/project/' + project.uri.toString()"
            >
                <div class="dev-project__title">
                    <p>{{ project.name }}</p>
                    <small>{{ project.technology }}</small>
                </div>
                <p class="dev-project__time">&RightArrow;</p>
            </RouterLink>
        </div>
    </section>
</template>

<script lang="ts">
import LinkComponent from '@/components/ui/LinkComponent.vue';
import { devProjectsList } from '@/store/data/developerProjectList';
import type { DeveloperProject } from '@/store/interfaces/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeHighlightSection',
    components: { LinkComponent },
    data() {
        const devProjectRefs: String[] = ['UOW 2450', 'HX 2150', 'HX 2101',];
        const devProjectsToShow: DeveloperProject[] = devProjectsList
            .filter((project: DeveloperProject) => devProjectRefs.includes(project.ref))
            .sort((a: DeveloperProject, b: DeveloperProject) => 
                devProjectRefs.indexOf(a.ref) - devProjectRefs.indexOf(b.ref));
        return { devProjectsToShow };
    }
});
</script>

<style lang="css" scoped>
.dev-projects {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.dev-projects .dev-projects__container {
    display: grid;
    gap: 1rem;
}

.dev-projects .dev-project__card {
    background-color: var(--clr-surface-container);
    padding: 1rem;
}

.dev-projects .dev-project__description {
    display: block;
}

.dev-projects .link-label {
    color: inherit;
    text-decoration: none;
}

.dev-projects .link-label:hover {
    text-decoration: underline;
}

.dev-project {
    filter: grayscale(1);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-decoration: none;
    color: inherit;
    place-items: center left;
}

.dev-project:hover {
    filter: grayscale(0);
}

.dev-project__image {
    width: 5rem;
    height: 5rem;
}

.dev-project__time {
    font-family: 'Inter Variable';
    place-self: center right;
}
</style>