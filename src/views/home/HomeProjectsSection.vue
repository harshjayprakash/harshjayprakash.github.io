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
    <section class="home-projects">
        <h2>Projects.</h2>
        <p>
            Below shows a collection of some of my undertaken projects, ranging from web
            development to traditional application development. Currently, these cards
            link to their respective GitHub repositories. In future, each project will
            have their own pages.
        </p>
        <TabGroupComponent variant="underline">
            <span>Filter: </span>
            <TabComponent
                @click="updateFilter('All')"
                v-bind:isActive="isActiveOption('All')"
            >
                All
            </TabComponent>
            <TabComponent
                @click="updateFilter('CLI Application')"
                v-bind:isActive="isActiveOption('CLI Application')"
            >
                CLI
            </TabComponent>
            <TabComponent
                @click="updateFilter('Desktop Application')"
                v-bind:isActive="isActiveOption('Desktop Application')"
            >
                Desktop
            </TabComponent>
            <TabComponent
                @click="updateFilter('Web Application')"
                v-bind:isActive="isActiveOption('Web Application')"
            >
                Web
            </TabComponent>
        </TabGroupComponent>
        <CardGroupComponent :desktopCols="2">
            <CardComponent
                v-for="(project, idx) in filteredProjects" v-bind:key="idx"
                variant="external-link" v-bind:path="project.gitUri.toString()"
            >
                <img class="card-preview"
                    v-bind:src="`/img/${project.abbreviation}-screenshot.PNG`"
                    v-bind:alt="`${project.name} screenshot`"
                >
                <div class="card-header">
                    <h3>
                        {{ project.name }}
                    </h3>
                    <small>
                        {{ project.technology }}
                    </small>
                </div>
                <p class="card-description">
                    {{ project.description }}
                </p>
                <div class="card-footer">

                </div>
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
