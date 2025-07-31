<script lang="ts" setup>
import { computed } from 'vue';

import TheBadge from '@/components/TheBadge.vue';
import TheCard from '@/components/TheCard.vue';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import useProjectPlatformFilter from '@/composables/useProjectPlatformFilter';
import { projectData } from '@/data/projects/projects';
import type { ProjectPlatformFilter } from '@/types/project/ProjectPlatform';

const getProjectImageSource = (abbrev: string) => `/images/${abbrev}-preview.png`;

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
                                :src="getProjectImageSource(project.abbreviation)"
                                alt=""
                            />
                        </div>
                        <div class="project-name">
                            <span>{{ project.name }}</span>
                            <small>{{ project.technology }}</small>
                        </div>
                        <div class="project-descr">
                            <small>{{ project.description }}</small>
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

.projects .project-card .project-image {
    border-radius: var(--rounded-default);
}

.projects .project-card .project-descr,
.projects .project-card .project-name {
    display: flex;
    flex-direction: column;
}

@media (min-width: 640px) {
    .projects .project-card {
        display: grid;
        grid-template-columns: 1fr 1fr 0.25fr 1fr;
        gap: 2rem;
    }

    .projects .project-card .project-image-wrapper {
        grid-column: 4 / 5;
    }

    .projects .project-card .project-name,
    .projects .project-card .project-descr {
        grid-row: 1;
    }

    .projects .project-card .project-name {
        grid-column: 1 / 2;
    }

    .projects .project-card .project-descr {
        grid-column: 2 / 3;
    }

    .projects .project-card:hover {
        background-color: var(--colour-bk-highlight);
        color: var(--colour-text-inverted);
    }

    .projects .project-card:hover .project-image-wrapper {
        z-index: 3;
    }

    .projects .project-card:hover .project-image-wrapper .project-image {
        scale: 150%;
    }
}
</style>
