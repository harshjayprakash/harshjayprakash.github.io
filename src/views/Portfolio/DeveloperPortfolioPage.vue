<template>
    <section class="dev-portfolio">
        <h1>Developer Portfolio</h1>
        <p>A list of undertaken projects</p>
        <div class="dev-projects-list">
            <CardComponent class="dev-project" v-for="project in devProjects">
                <span class="project__title">{{ project.name }}</span>
                <p class="project__description">{{ project.description }}</p>
                <LinkComponent link-type="internal" 
                    :to="`/portfolio/dev/project/${project.uri.toString()}`"
                >
                    View Details &RightArrow;
                </LinkComponent>
            </CardComponent>
        </div>
    </section>
</template>

<script lang="ts">
import CardComponent from '@/components/ui/CardComponent.vue';
import LinkComponent from '@/components/ui/LinkComponent.vue';
import { devProjectsList } from '@/store/data/developerProjectList';
import type { DeveloperProject } from '@/store/interfaces/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DeveloperPortfolioPage',
    components: { CardComponent, LinkComponent },
    data() {
        const devProjects: DeveloperProject[] = devProjectsList;
        return { devProjects };
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.dev-portfolio {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.dev-project {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
}

.dev-projects-list {
    display: grid;
    gap: 1rem;
}

.project__title {
    font-weight: 600;
}

@media (min-width: 769px) {
    .dev-projects-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>