<script lang="ts" setup>
import { computed } from 'vue';

import TheBadge from '@/components/TheBadge.vue';
import TheCard from '@/components/TheCard.vue';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import useProjectPlatformFilter from '@/composables/useProjectPlatformFilter';
import { projectData } from '@/data/projects/projects';
import type { ProjectPlatformFilter } from '@/types/project/ProjectPlatform';
import type { Project } from '@/types/project/Project';

const getProjectImageSource = (p: Project) => `/images/${p.image}`;

const {
    filtered, updateFilter, totalCount, currentCount
} = useProjectPlatformFilter(projectData.filterByAbbreviation(
    ['ppw', 'xbk', 'aap', 'dwf', 'wpq', 'lls', 'ccs']
));


const filterOptions: ProjectPlatformFilter[] = ['All', 'CLI', 'Desktop', 'Web'];

const projectCountBadgeAriaLabel = () => {
    return `${totalCount.value} Total Projects, ${currentCount.value} Shown`
}

const projectCountBadgeText = computed(() =>
    (totalCount.value == currentCount.value) ? 'Showing All Projects'
    : `Showing ${currentCount.value} of ${totalCount.value} Projects`
);
</script>

<template>
    <article aria-label="Projects Page" class="projects">
        <h1>Projects.</h1>
        <p class="overview">
            Explore my projects below, arranged by their last modification. Use the filter
            to narrow down by the projects by technology type.
            <span class="faded-text">
                Note that the year reflects when the projects were first started rather
                than its completion date; project statuses provide insight into their
                current state. These cards link to their respective GitHub
                repositories.
            </span>
        </p>
        <TheBadge appearance="outline" colour="primary"
            :aria-label="projectCountBadgeAriaLabel()"
        >
            {{ projectCountBadgeText }}
        </TheBadge>
        <TheTabList>
            <TheTab v-for="(fo, idx) in filterOptions" :key="`Filter Option: ${fo}`"
                @click="updateFilter(fo)" :index="idx"
            >
                {{ fo }}
            </TheTab>
        </TheTabList>
        <div class="project-list-container" role="tabpanel"
            aria-label="Project List Container"
        >
            <ul class="projects-list">
                <li class="project-wrapper" v-for="project in filtered"
                    :key="project.abbreviation"
                >
                    <TheCard appearance="filled" linkable="external" new-window
                        :to="project.git" class="project-card"
                    >
                        <div class="project-image-wrapper">
                            <img
                                class="project-image"
                                :src="getProjectImageSource(project)"
                                alt=""
                            />
                        </div>
                        <div class="project-info">
                            <span class="title">{{ project.name }}</span>
                            <span>{{ project.start }} &ndash; {{ project.status }}</span>
                            <span>{{ project.technology }}</span>
                            <span class="descr">{{ project.description }}</span>
                        </div>
                    </TheCard>
                </li>
            </ul>
        </div>
    </article>
</template>

<style lang="css">
.projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.projects .overview {
    max-width: 70ch;
}

.projects .faded-text {
    color: var(--colour-text-faded);
}

.projects .projects-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    gap: 1rem;
}

.projects .project-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    position: relative;
}

.projects .project-card .title {
    text-decoration: solid underline 0.05rem;
    padding-block-end: 0.5rem;
    color: var(--colour-text-primary);
}

.projects .project-card:hover .title {
    text-decoration-thickness: 0.2rem;
    color: var(--colour-text-highlight-stronger)
}

.projects .project-card .project-image {
    border-radius: var(--rounded-default);
}

.projects .project-card .project-info {
    display: flex;
    flex-direction: column;
}

.projects .project-card .project-info *:not(.title) {
    color: var(--colour-text-faded-less);
}

@media (min-width: 640px) {
    .projects .project-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .projects .project-card :nth-child(4) {
        padding-block: 1rem;
    }
}
</style>
