<script lang="ts" setup>
import { computed, ref } from 'vue';
import getAltText from '@/data/altText';
import getProjects from '@/data/projects';
import type { ProjectCategory } from '@/types/ProjectCategory';
import TheTabList from '@/components/TheTabList.vue';
import TheTab from '@/components/TheTab.vue';
import TheBadge from '@/components/TheBadge.vue';

const { findAltTextFromName } = getAltText();

const getProjectImageSource = (abbrev: string) =>
    `/images/${abbrev}-preview.png`;

const getProjectImageAlt = (abbrev: string) =>
    findAltTextFromName(`${abbrev}-preview.png`);

const { filterProjectsByAbbreviation } = getProjects();

const projects = filterProjectsByAbbreviation(
    ['ppw', 'xbk', 'aap', 'wpq', 'lls', 'dwf', 'ccs']
);

const projectFilter = ref<ProjectCategory>('All');
const projectsRef = ref(projects);

const filteredProjects = computed(() =>
    (projectFilter.value === 'All') ? projectsRef.value
    : projectsRef.value.filter(project => project.category ===  projectFilter.value)
);

const filterOptions: ProjectCategory[] = ['All', 'CLI', 'Desktop', 'Web'];

const updateFilter = (category: ProjectCategory) => projectFilter.value = category;
const isActiveFilter = (category: ProjectCategory) => (projectFilter.value === category);

const projectCountMax = projects.length;
const projectCountCurrent = computed(() => filteredProjects.value.length);

const projectCountBadgeAriaLabel = () => {
    return `${projectCountMax} Total Projects, ${projectCountCurrent.value} Shown`
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
            Showing {{ projectCountCurrent }} of {{ projectCountMax }} Projects.
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
        <div role="list" class="projects">
            <a
                v-for="project in filteredProjects"
                :key="project.abbreviation"
                role="listitem"
                class="project-card"
                :href="project.gitUri"
            >
                <img
                    :src="getProjectImageSource(project.abbreviation)"
                    :alt="getProjectImageAlt(project.abbreviation)"
                />
                <div>
                    <h3>{{ project.name }}</h3>
                    <small>{{ project.timeframe }} &mdash; {{ project.status }}</small>
                    <p>{{ project.description }}</p>
                </div>
            </a>
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

.project-card {
    padding: 1rem;
    background-color: var(--colour-bk-secondary);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
}

.project-card:hover {
    background-color: var(--colour-bk-hover);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    scale: 101%;
}
</style>
