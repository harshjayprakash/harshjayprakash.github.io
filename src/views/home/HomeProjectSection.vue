<script setup lang="ts">
import BadgeWidget from '@/components/BadgeWidget.vue';
import CardWidget from '@/components/CardWidget.vue';
import DividerWidget from '@/components/DividerWidget.vue';
import TabListWidget from '@/components/TabListWidget.vue';
import TabWidget from '@/components/TabWidget.vue';
import useDeveloperProjectFilter from '@/composables/useDeveloperProjectFilter';
import getImageAltText from '@/data/imageAltText';
import { computed } from 'vue';

const {
    filteredProjects,
    updateAbbreivationsFilter,
    updateCategoryFilter,
    isActiveCategoryFilter
} = useDeveloperProjectFilter();

updateAbbreivationsFilter([
    'ppw', 'xbk', 'aap', 'wpq', 'dwf', 'lls', 'ccs'
]);

const maxProjectsCount = filteredProjects.value.length;
const shownProjectCount = computed(() => filteredProjects.value.length);

const { getAltText } = getImageAltText();

const getProjectImageObjectName = (abbrev: string) => {
    return `${abbrev}-screenshot.png`;
}

const getProjectImageAlt = (abbrev: string) => {
    return getAltText(getProjectImageObjectName(abbrev));
}

const getProjectImageSource = (abbrev: string) => {
    return `/images/${getProjectImageObjectName(abbrev)}`;
}

const getBadgeFilterText = () => {
    if (maxProjectsCount == shownProjectCount.value) {
        return 'All projects shown';
    }
    return `${shownProjectCount.value} of ${maxProjectsCount} projects shown`
}

const getBadgeFilterAria = () => {
    return `Showing ${shownProjectCount.value} of ${maxProjectsCount} total projects`
}
</script>

<template>
    <DividerWidget variant="horizontal" />
    <section class="projects" aria-label="Projects">
        <h2>Projects.</h2>
        <p>
            Below shows some of my projects &mdash; It's not much, but it is about the
            quality of the products. These cards currently link to their respective GitHub
            repositories, but in future will have their own article pages.
        </p>
        <BadgeWidget
            variant="outline"
            colour="primary"
            :aria-label="getBadgeFilterAria()"
        >
            {{ getBadgeFilterText() }}
        </BadgeWidget>
        <TabListWidget
            variant="filled"
            orientation="horizontal"
            aria-label="Project Filter"
        >
            <TabWidget
                :is-selected="isActiveCategoryFilter('All')"
                @click="updateCategoryFilter('All')"
            >
                All
            </TabWidget>
            <TabWidget
                :is-selected="isActiveCategoryFilter('CLI Application')"
                @click="updateCategoryFilter('CLI Application')"
            >
                CLI
            </TabWidget>
            <TabWidget
                :is-selected="isActiveCategoryFilter('Desktop Application')"
                @click="updateCategoryFilter('Desktop Application')"
            >
                Desktop
            </TabWidget>
            <TabWidget
                :is-selected="isActiveCategoryFilter('Web Application')"
                @click="updateCategoryFilter('Web Application')"
            >
                Web
            </TabWidget>
        </TabListWidget>
        <div role="group" class="project-list" aria-label="Projects List">
            <CardWidget
                v-for="project in filteredProjects"
                :key="project.abbreviation"
                variant="filled"
                link="external"
                :elevated="false"
                :elevate-on-hover="true"
                :fill-on-hover="true"
                :path="project.gitUri"
            >
                <div class="project-card">
                    <img
                        class="image"
                        :src="getProjectImageSource(project.abbreviation)"
                        :alt="getProjectImageAlt(project.abbreviation)"
                    />
                    <div>
                        <h3>{{ project.name }}</h3>
                        <small>{{ project.timeframe }}</small>&emsp;
                        <small>{{ project.technology }}</small>
                    </div>
                    <p>{{ project.description }}</p>
                </div>
            </CardWidget>
        </div>
    </section>
</template>

<style lang="css" scoped>
.projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-end: 5rem;
}

.project-list {
    display: grid;
    gap: 1rem;
}

.image {
    border-radius: var(--border-radius-default);
}

.project-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

@media screen and (min-width: 768px) {
    .project-list {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
