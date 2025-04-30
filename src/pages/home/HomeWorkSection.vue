<script lang="ts" setup>
import getAltText from '@/data/altText';
import getProjects from '@/data/projects';
import type { ProjectCategory } from '@/types/ProjectCategory';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import TheBadge from '@/components/TheBadge.vue';
import useProjectCategoryFilter from '@/composables/useProjectCategoryFilter';
import TheCard from '@/components/TheCard.vue';

const { findAltTextFromName } = getAltText();

const getProjectImageSource = (abbrev: string) =>
    `/images/${abbrev}-preview.png`;

const getProjectImageAlt = (abbrev: string) =>
    findAltTextFromName(`${abbrev}-preview.png`);

const { filterProjectsByAbbreviation } = getProjects();

const {
    filteredProjects, updateFilter, isActiveFilter, useProjectCounter
} = useProjectCategoryFilter(
    filterProjectsByAbbreviation(['ppw', 'xbk', 'aap', 'dwf', 'wpq', 'lls', 'ccs'])
);

const filterOptions: ProjectCategory[] = ['All', 'CLI', 'Desktop', 'Web'];

const { totalCount, currentCount } = useProjectCounter();

const projectCountBadgeAriaLabel = () => {
    return `${totalCount.value} Total Projects, ${currentCount.value} Shown`
}
</script>

<template>
    <section aria-label="Work" class="work">
        <h2>Projects.</h2>
        <p>
            Here are a few my latest projects &mdash; it's not much, but it is about the
            quality. Each use a different technology, even though the date looks old, it
            does mean that the project has been completed. Projects are organised by
            most recently modified.
        </p>
        <TheBadge :aria-label="projectCountBadgeAriaLabel()" variant="tint" colour="primary">
            Showing {{ currentCount }} of {{ totalCount }} Projects.
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
                v-for="project in filteredProjects"
                :key="project.abbreviation"
                :to="project.gitUri"
            >
                <img
                    :src="getProjectImageSource(project.abbreviation)"
                    :alt="getProjectImageAlt(project.abbreviation)"
                />
                <div class="info">
                    <h3>{{ project.name }}</h3>
                    <small>{{ project.timeframe }} &mdash; {{ project.status }}</small>
                    <small>{{ project.technology }}</small>
                    <p>{{ project.description }}</p>
                </div>
            </TheCard>
        </div>
    </section>
</template>

<style lang="css" scoped>
.work {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.projects {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
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
