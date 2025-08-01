<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue';
import TheButton from '@/components/TheButton.vue';
import TheCard from '@/components/TheCard.vue';
import { projectData } from '@/data/projects/projects';

const selectProjects = projectData.filterByAbbreviation(['xbk', 'dwf']);
const dissertationProject = projectData.filterByAbbreviation(['aap'])[0];
const imageSrc = (name?: string) => `/images/${name}`;
</script>

<template>
    <section class="home-spotlight-section" aria-label="Project Spotlight">
        <div>
            <h2>Select Projects</h2>
            <p class="overview">
                Some things I've built that reflect how I like to work &ndash; curious,
                hands-on, and always looking for clarity in complexity. Each one providing
                a different kind of challenge.
            </p>
        </div>
        <ul class="select-projects" aria-label="Selected Projects">
            <li class="project-wrapper" v-for="project in selectProjects"
                :key="project.abbreviation"
            >
                <TheCard appearance="filled" linkable="external" :to="project.git"
                    class="project-card"
                >
                    <img :src="imageSrc(project.image)" alt=""
                        class="project-image" />
                    <span class="title">{{ project.name }}: {{ project.title }}</span>
                    <p class="muted-text">{{ project.description }}</p>
                </TheCard>
            </li>
        </ul>
        <section class="dissertation" aria-label="University Dissertation Project">
            <TheCard appearance="filled" linkable="external"
                :to="dissertationProject.git" elevate class="project-card--dissertation"
            >
                <div role="group" class="information">
                    <TheBadge colour="primary" appearance="outline">
                        Capstone Project
                    </TheBadge>
                    <span class="title">
                        {{ dissertationProject.name }}: {{ dissertationProject.title }}
                    </span>
                    <p class="muted-text">
                        {{ dissertationProject.description }}
                    </p>
                </div>
                <div class="image-wrapper">
                    <img :src="imageSrc(dissertationProject.image)"
                        alt="" class="project-image"
                    />
                </div>
            </TheCard>
        </section>
        <TheButton appearance="default" linkable="internal" to="/projects">
            Explore More Projects
        </TheButton>
    </section>
</template>

<style lang="css">
.home-spotlight-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-spotlight-section .overview {
    max-width: 70ch;
}

.home-spotlight-section .select-projects {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
}

.home-spotlight-section .project-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.home-spotlight-section .project-card:hover .title,
.home-spotlight-section .project-card--dissertation:hover .title {
    text-decoration-thickness: 0.2rem;
    color: var(--colour-text-highlight-stronger);
}

.home-spotlight-section .project-card .title,
.home-spotlight-section .project-card--dissertation .title {
    text-decoration: solid underline 0.05rem;
    color: var(--colour-text-primary);
}

.home-spotlight-section .muted-text {
    color: var(--colour-text-faded-less);
}

.home-spotlight-section .project-image {
    border-radius: var(--rounded-default);
}

.home-spotlight-section .project-card--dissertation .information {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-spotlight-section .project-card--dissertation {
    display: grid;
    gap: 1rem;
}

.home-spotlight-section .project-card--dissertation .information {
    grid-row: 2;
}


@media (min-width: 640px) {
    .home-spotlight-section .select-projects {
        grid-template-columns: repeat(2, 1fr);
    }

    .home-spotlight-section .project-card--dissertation {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .home-spotlight-section .project-card--dissertation .information {
        grid-row: 1;
    }
}
</style>
