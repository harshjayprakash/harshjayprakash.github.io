<script lang="ts">
import { computed, defineComponent } from 'vue';

import BadgeComponent from '@/components/data/BadgeComponent.vue';
import CardComponent from '@/components/surface/CardComponent.vue';
import CardGroupComponent from '@/components/surface/CardGroupComponent.vue';
import SpacerComponent from '@/components/layout/SpacerComponent.vue';
import TabComponent from '@/components/navigation/TabComponent.vue';
import TabGroupComponent from '@/components/navigation/TabGroupComponent.vue';

import type { ProjectCategory } from '@/interfaces/DeveloperProject';
import getImageData from '@/store/imageText';

import useProjectFilter from '@/composables/useProjectFilter';

const HomeProjectsSection = defineComponent({
    name: 'HomeProjectsSection',
    components: {
        CardGroupComponent,
        CardComponent,
        TabGroupComponent,
        TabComponent,
        BadgeComponent,
        SpacerComponent
    },
    setup() {
        const {
            filteredProjects,
            typeFilter,
            updateFilter,
            filterByAbbreviation
        } = useProjectFilter();
        filterByAbbreviation(['ppw', 'xbk', 'aap', 'wpq', 'lls', 'dwf', 'ccs']);

        const { getImageAlt } = getImageData();

        const allProjectCount = filteredProjects.value.length;
        const projectCount = computed(() => filteredProjects.value.length);

        const colouredBadge = () => {
            return (allProjectCount === projectCount.value) ? 'outline' : 'tint';
        }

        const isActiveOption = (category: ProjectCategory) => {
            return (typeFilter.value === category);
        }

        return {
            filteredProjects, typeFilter, updateFilter, isActiveOption,
            allProjectCount, projectCount, colouredBadge, getImageAlt
        };
    },
});

export default HomeProjectsSection;
</script>

<template>
    <section class="home-projects" aria-label="Projects Section">
        <h2>Projects.</h2>
        <p>
            Below shows a collection of some of my undertaken projects, ranging from web
            development to traditional application development. Currently, these cards
            link to their respective GitHub repositories. In future, each project will
            have their own pages.
        </p>
        <SpacerComponent spacing="1rem"/>
        <BadgeComponent
            class="badge--ctx-project-count"
            v-bind:variant="colouredBadge()"
            aria-atomic="true"
            v-bind:aria-label="`${projectCount} out ${allProjectCount} Shown in Project List`">
            <template v-if="projectCount === allProjectCount">
                Showing All Projects.
            </template>
            <template v-else>
                Showing {{ projectCount }} of {{ allProjectCount }} Projects.
            </template>
        </BadgeComponent>
        <TabGroupComponent
            variant="underline"
            aria-label="Tabs To Filter Project By Type"
        >
            <span>Filter: </span>
            <TabComponent
                v-on:click="updateFilter('All')"
                v-bind:isActive="isActiveOption('All')"
                aria-label="Show All Projects"
            >
                All
            </TabComponent>
            <TabComponent
                v-on:click="updateFilter('CLI Application')"
                v-bind:isActive="isActiveOption('CLI Application')"
                aria-label="Show Only Command Line Projects"
            >
                CLI
            </TabComponent>
            <TabComponent
                v-on:click="updateFilter('Desktop Application')"
                v-bind:isActive="isActiveOption('Desktop Application')"
                aria-label="Show Only Desktop Projects"
            >
                Desktop
            </TabComponent>
            <TabComponent
                v-on:click="updateFilter('Web Application')"
                v-bind:isActive="isActiveOption('Web Application')"
                aria-label="Show Only Web Projects"
            >
                Web
            </TabComponent>
        </TabGroupComponent>
        <CardGroupComponent
            v-bind:desktopCols="2"
            aria-atomic="true"
            aria-label="List of Projects, Based On Filter"
        >
            <CardComponent
                v-for="project in filteredProjects" v-bind:key="project.abbreviation"
                variant="external-link" v-bind:path="project.gitUri.toString()"
            >
                <img
                    class="card-preview"
                    v-bind:src="`/img/${project.abbreviation}-screenshot.PNG`"
                    v-bind:alt="getImageAlt(`${project.abbreviation}-screenshot.PNG`).toString() ?? ''"
                >
                <section class="card-header">
                    <h3>
                        {{ project.name }}
                    </h3>
                    <small>
                        {{ project.technology }}
                    </small>
                </section>
                <p class="card-description">
                    {{ project.description }}
                </p>
            </CardComponent>
        </CardGroupComponent>
    </section>
</template>

<style lang="css" scoped>
.home-projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.badge--ctx-project-count {
    width: fit-content;
}

.project-count {
    padding-block-start: 0.15rem;
}
</style>
