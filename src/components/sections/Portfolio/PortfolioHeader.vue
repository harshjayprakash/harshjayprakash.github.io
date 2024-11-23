<template>
    <section class="portfolio-project-header">
        <div class="links">
            <LinkComponent link-type="internal" to="/portfolio/dev">
                &LeftArrow; Back to projects list
            </LinkComponent>
            <LinkComponent link-type="external" 
                :to="currentProject?.gitUri ?? '#'">
                View on GitHub (leaves site) &nearrow;
            </LinkComponent>
        </div>
        <h1 class="dev-project-header__title">
            {{ currentProject?.name }}
        </h1>
            <div class="dev-project-header__information">
                <span class="project-reference">
                    <span class="faded">Ref</span>
                    {{ currentProject?.ref }}
                </span>
                <span class="project-role">
                    <span class="faded">Role</span>
                    {{ currentProject?.role }}
                </span>
                <span class="project-context">
                    <span class="faded">Context</span>
                    {{ currentProject?.context }}
                </span>
                <span class="project-period">
                    <span class="faded">Period</span>
                    {{ currentProject?.timeframe }}
                </span>
                <span class="dev-project-header__technology">
                    <span class="faded">Technology</span>
                    {{ currentProject?.technology }}
                </span>
            </div>
    </section>
    <RouterView />
</template>

<script lang="ts">
import CardComponent from '@/components/ui/CardComponent.vue';
import LinkComponent from '@/components/ui/LinkComponent.vue';
import router from '@/router';
import { devProjectsList } from '@/store/data/developerProjectList';
import type { DeveloperProject } from '@/store/interfaces/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PortfolioHeader',
    components: { LinkComponent, CardComponent },
    data() {
        const currentUri: String = router.currentRoute.value.fullPath.toString();
        const projectUri: String = currentUri.slice(23, currentUri.length);
        let currentProject: DeveloperProject | undefined;
        devProjectsList.forEach(project => {
            if (project.uri === projectUri) {
                currentProject = project;
            }
        });
        return { currentProject };
    }
});
</script>

<style lang="css" scoped>
.portfolio-project-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.portfolio-project-header .links {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.portfolio-project-header .faded {
    color: var(--clr-on-surface-variant);
}


.dev-project-header__information {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
}

.dev-project-header__title {
    text-transform: uppercase;
    font-weight: 500;
}

@media (max-width: 768px) {
    .dev-project-header__information {
        display: flex;
        flex-direction: column;
    }
}
</style>