<script setup lang="ts">
import { computed } from 'vue';

import BadgeWidget from '@/components/BadgeWidget.vue';
import CardWidget from '@/components/CardWidget.vue';
import CardGroupWidget from '@/components/CardGroupWidget.vue';
import SpacerWidget from '@/components/SpacerWidget.vue';
import TabWidget from '@/components/TabWidget.vue';
import TabGroupWidget from '@/components/TabGroupWidget.vue';

import type { ProjectCategory } from '@/interfaces/DeveloperProject';
import getImageData from '@/store/imageText';
import useProjectFilter from '@/composables/useProjectFilter';

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
        <SpacerWidget spacing="1rem"/>
        <BadgeWidget
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
        </BadgeWidget>
        <TabGroupWidget
            variant="underline"
            aria-label="Tabs To Filter Project By Type"
        >
            <span>Filter: </span>
            <TabWidget
                v-on:click="updateFilter('All')"
                v-bind:isActive="isActiveOption('All')"
                aria-label="Show All Projects"
            >
                All
            </TabWidget>
            <TabWidget
                v-on:click="updateFilter('CLI Application')"
                v-bind:isActive="isActiveOption('CLI Application')"
                aria-label="Show Only Command Line Projects"
            >
                CLI
            </TabWidget>
            <TabWidget
                v-on:click="updateFilter('Desktop Application')"
                v-bind:isActive="isActiveOption('Desktop Application')"
                aria-label="Show Only Desktop Projects"
            >
                Desktop
            </TabWidget>
            <TabWidget
                v-on:click="updateFilter('Web Application')"
                v-bind:isActive="isActiveOption('Web Application')"
                aria-label="Show Only Web Projects"
            >
                Web
            </TabWidget>
        </TabGroupWidget>
        <CardGroupWidget
            :desktop-cols="2"
            aria-atomic="true"
            aria-label="List of Projects, Based On Filter"
        >
            <CardWidget
                v-for="project in filteredProjects" :key="project.abbreviation.toString()"
                :variant="'external-link'" :path="project.gitUri.toString()"
            >
                <img
                    class="card-preview"
                    :src="`/img/${project.abbreviation}-screenshot.PNG`"
                    :alt="getImageAlt(`${project.abbreviation}-screenshot.PNG`).toString() ?? ''"
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
            </CardWidget>
        </CardGroupWidget>
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
