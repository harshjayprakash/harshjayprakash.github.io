<template>
    <section class="dev-projects">
        <h2 class="dev-projects__title">Developer Portfolio Highlights.</h2>
        <p class="dev-projects__context">
            Below show some of my recent projects.
        </p>
        <div class="dev-projects__container">
            <article class="dev-project__card" v-for="project in devProjectsToShow">
                <span class="dev-project__title">{{ project.name }}</span>
                <small class="dev-project__description">
                    {{ project.ref }} ~ {{ project.technology }} &mdash; {{ project.description }}
                </small>
                <RouterLink class="dev-project__link link-label" :to="'/portfolio/dev/project/' + project.uri">
                    Views Details &RightArrow;
                </RouterLink>
            </article>
            <article class="dev-project__card view-more-card">
                <RouterLink class="card-link link-label" to="/portfolio/dev">
                    View More &RightArrow;
                </RouterLink>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import { devProjectsList } from '@/store/data/developerProjectList';
import type { DeveloperProject } from '@/store/interfaces/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeHighlightSection',
    data() {
        const devProjectRefs: String[] = ['UOW 2450', 'HX 2150', 'HX 2050',];
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

.dev-projects .dev-projects__title {
    text-transform: uppercase;
}

.dev-projects .dev-projects__title,
.dev-projects .dev-projects__context {
    text-align: center;
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

@media (min-width: 769px) {
    .dev-projects .dev-projects__container {
        grid-template-columns: repeat(2, 1fr);
    }
}

</style>