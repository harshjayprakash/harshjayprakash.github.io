<script lang="ts">
import { defineComponent } from 'vue';

import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';
import TabComponent from '@/components/TabComponent.vue';
import TabGroupComponent from '@/components/TabGroupComponent.vue';

import type { ProjectCategory } from '@/store/interfaces/DeveloperProject';

import useProjectFilter from '@/composables/useProjectFilter';

const HomeProjectsSection = defineComponent({
    name: 'HomeProjectsSection',
    components: {
        CardGroupComponent,
        CardComponent,
        TabGroupComponent,
        TabComponent
    },
    setup() {
        const {
            filteredProjects,
            typeFilter,
            updateFilter,
            filterByAbbreviation
        } = useProjectFilter();
        filterByAbbreviation(['ppw', 'xbk', 'aap', 'wpq', 'lls', 'dwf', 'ccs']);

        const isActiveOption = (category: ProjectCategory) => {
            return (typeFilter.value === category);
        }

        return { filteredProjects, typeFilter, updateFilter, isActiveOption };
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
        <TabGroupComponent
            variant="underline"
            aria-label="Tabs To Filter Project By Type"
        >
            <span aria-label="Filter Label">Filter: </span>
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
                    aria-label="Visual Image of Project"
                    class="card-preview"
                    v-bind:src="`/img/${project.abbreviation}-screenshot.PNG`"
                    v-bind:alt="`${project.name} screenshot`"
                >
                <section class="card-header">
                    <h3 aria-label="Name of Project">
                        {{ project.name }}
                    </h3>
                    <small aria-label="Technologies Used to Build Project">
                        {{ project.technology }}
                    </small>
                </section>
                <p class="card-description" aria-label="Short Project Description">
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
</style>
