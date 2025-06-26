<script lang="ts" setup>
import { computed } from 'vue';

import TheBadge from '@/components/TheBadge.vue';
import TheCard from '@/components/TheCard.vue';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import useProjectPlatformFilter from '@/composables/useProjectPlatformFilter';
import getAltText from '@/data/altText';
import { projectData } from '@/data/projects/projects';
import type { ProjectPlatformFilter } from '@/types/project/ProjectPlatform';

const { findAltTextFromName } = getAltText();

const getProjectImageSource = (abbrev: string) =>
    `/images/${abbrev}-preview.png`;

const getProjectImageAlt = (abbrev: string) =>
    findAltTextFromName(`${abbrev}-preview.png`);


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
    <article aria-label="Work" class="work">
        <h1>Projects.</h1>
        <p class="work-overview">
            Explore my projects below, arranged by their last modification. Use the filter
            to narrow down by the projects by technology type.
            <span class="faded-text">
                Note that the year reflects when the projects were first started rather
                than its completion date; project statuses provide insight into their
                current state. These cards link to their respective GitHub
                repositories.
            </span>
        </p>
        <TheBadge :aria-label="projectCountBadgeAriaLabel()" variant="tint" colour="primary">
            {{ projectCountBadgeText }}
        </TheBadge>
        <TheTabList>
            <TheTab
                v-for="fo in filterOptions"
                :key="`Filter Option: ${fo}`"
                :active="isActiveFilter(fo)"
                @click="updateFilter(fo)"
            >
                {{ fo }}
            </TheTab>
        </TheTabList>
        <div role="group" class="projects">
            <TheCard
                link="external"
                new-window exact
                v-for="project in filtered"
                :key="project.abbreviation"
                :to="project.git"
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
        </div>
    </article>
</template>

<style lang="css" scoped>
.work {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.work-overview {
    max-width: 52rem;
}

.projects {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
}

.project-image {
    border-radius: var(--rounded-default);
}

.faded-text {
    color: var(--colour-text-faded);
}

.faded-text-less {
    color: var(--colour-text-faded-less);
}


@media (width > 40rem) {
    .projects {
        grid-template-columns: repeat(2, 1fr);
    }
}

.info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}
</style>
