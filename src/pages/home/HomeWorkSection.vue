<script lang="ts" setup>
import getAltText from '@/data/altText';
import getProjects from '@/data/projects';
import type { ProjectCategory } from '@/types/ProjectCategory';
import { computed, ref } from 'vue';

const { findAltTextFromName } = getAltText();

const { filterProjectsByAbbreviation } = getProjects();
const projects = filterProjectsByAbbreviation(
    ['xbk', 'ppw', 'aap', 'wpq', 'lls', 'dwf', 'ccs']
);

const projectFilter = ref<ProjectCategory>('All');
const projectsRef = ref(projects);

const filteredProjects = computed(() =>
    (projectFilter.value === 'All') ? projectsRef.value
    : projectsRef.value.filter(project => project.category ===  projectFilter.value)
);

const getProjectImageSource = (abbrev: string) => {
    return `/images/${abbrev}-preview.png`;
}

const getProjectImageAlt = (abbrev: string) => {
    return findAltTextFromName(`${abbrev}-preview.png`);
}
</script>

<template>
    <section aria-label="Work" class="work">
        <h2>Work.</h2>
        <p>
            Here are a few my latest projects &mdash; it's not much, but it is about the
            quality. Each use a different technology, even though the date looks old, it
            does mean that the project has been completed.
        </p>
        <div role="tablist">
            <button role="tab">
                All
            </button>
            <button role="tab">
                CLI
            </button>
            <button role="tab">
                Desktop
            </button>
            <button role="tab">
                Web
            </button>
        </div>
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
