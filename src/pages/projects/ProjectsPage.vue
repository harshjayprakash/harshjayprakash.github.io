<script lang="ts" setup>
import { computed } from 'vue';

import TheBadge from '@/components/TheBadge.vue';
import TheCard from '@/components/TheCard.vue';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import useProjectPlatformFilter from '@/composables/useProjectPlatformFilter';
import { projectData } from '@/data/projects/projects';
import type { ProjectPlatformFilter } from '@/types/project/ProjectPlatform';
import { imageData } from '@/data/ui/image';

const getProjectImageSource = (abbrev: string) => `/images/${abbrev}-preview.png`;

const getProjectImageAlt = (abbrev: string) => imageData.getByObjectName(`${abbrev}-preview`)

const {
    filtered, updateFilter, isActiveFilter, totalCount, currentCount
} = useProjectPlatformFilter(
    projectData.filterByAbbreviation(['ppw', 'xbk', 'aap', 'dwf', 'wpq', 'lls', 'ccs'])
);


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
            <TheTab v-for="fo in filterOptions" :key="`Filter Option: ${fo}`"
                :active="isActiveFilter(fo)" @click="updateFilter(fo)"
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
                        <img
                            class="project-image"
                            :src="getProjectImageSource(project.abbreviation)"
                            :alt="getProjectImageAlt(project.abbreviation)"
                        />
                        <div class="info" role="group">
                            <span>
                                {{ project.name }}
                            </span>
                            <small class="faded-text-less">
                                {{ project.start }} &mdash; {{ project.status }}
                            </small>
                            <small class="faded-text-less">
                                {{ project.technology }} ~ {{ project.description }}
                            </small>
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
}

.projects .project-card .project-image {
    border-radius: var(--rounded-default);
}

.projects .project-card .info {
    display: flex;
    flex-direction: column;
}

.projects .project-card .info .faded-text-less {
    color: var(--colour-text-faded-less)
}

@media (min-width: 768px) {
    .projects .projects-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
