<template>
    <section class="home-container">
        <section class="hero-section">
            <img
                class="profile-picture"
                :src="profilePictureUri.toString()"
                alt="profile picture"
            />
            <h1 class="greeting">
                Hello, I'm Harsh Jayprakash
                <br />
                &mdash; a programmer and artist based in Southampton, UK.
            </h1>
        </section>
        <section class="projects-section">
            <h2 class="title">Projects.</h2>
            <p class="descr">Things I've worked on.</p>
            <div class="card-list">
                <RouterLink
                    class="card-container"
                    v-for="(project, projectIdx) in projectsToShow"
                    :key="projectIdx"
                    :to="`/work/${project.slug}`"
                >
                    <article class="card">
                        <img
                            class="image"
                            :src="`/img/dev/${project.abbreviation}-screenshot.PNG`"
                            :alt="`${project.name} screenshot`"
                        />
                        <small class="timeframe">
                            {{ project.timeframe }}
                        </small>
                        <h3 class="title">{{ project.name }}</h3>
                        <p class="descr">{{ project.description }}</p>
                    </article>
                </RouterLink>
            </div>
        </section>
        <section class="skills-quals-section">
            <section class="skills-section">
                <h2 class="title">Skills.</h2>
                <p class="descr">Things I can do.</p>
                <div class="dual-list">
                    <div class="list-container">
                        <h3 class="subtitle">Technical.</h3>
                        <ul class="list">
                            <li
                                class="list-item"
                                v-for="(skill, skillIdx) in technicalSkills"
                                :key="skillIdx"
                            >
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                    <div class="list-container">
                        <h3 class="subtitle">Traditional</h3>
                        <ul class="list">
                            <li
                                class="list-item"
                                v-for="(skill, skillIdx) in traditionalSkills"
                                :key="skillIdx"
                            >
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="qualifications-section">
                <h2 class="title">Qualifications.</h2>
                <p class="descr">My education.</p>
                <ul class="list">
                    <li class="list-item">
                        Bachelor's in Computer Science
                    </li>
                    <li class="list-item">
                        A-Levels in Computer Science, Maths, Fine Art.
                    </li>
                    <li class="list-item">
                        GCSEs in English, Maths, Science, Geography, Spanish, Computer
                        Science and Fine Art.
                    </li>
                </ul>
            </section>
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import type { DeveloperProject } from '@/store/interface/DeveloperProject';
import { developerProjects } from '@/store/data/developerProjects';
import { socials } from '@/store/data/socials';
import { technicalSkills, traditionalSkills } from '@/store/data/skills';

export default defineComponent({
    name: 'HomeView',
    components: { RouterLink },
    data() {
        const projectFilter: String[] = [
            'HX2101', 'UOW2450', 'UOW2400', 'UOW2300', 'UOW2301', 'UOW2200'
        ];
        const projectsToShow: DeveloperProject[] = developerProjects
            .filter((project: DeveloperProject) =>
                projectFilter.includes(project.reference))
            .sort((projectA: DeveloperProject, projectB: DeveloperProject) =>
                projectFilter.indexOf(projectA.reference)
                - projectFilter.indexOf(projectB.reference));
        const profilePictureUri: String =
            'https://avatars.githubusercontent.com/u/58461297?v=4';
        return {
            projectsToShow, socials, profilePictureUri,
            technicalSkills, traditionalSkills
        };
    }
});
</script>

<style lang="css" scoped>
.descr {
    opacity: 0.70;
}

.hero-section {
    padding-block: 3rem;
}

.hero-section .profile-picture {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-block: 1rem;
}

.hero-section .greeting {
    max-width: 30ch;
}

.projects-section .card-list,
.skills-quals-section,
.skills-section .dual-list {
    display: grid;
    padding-block: 2rem;
    gap: 2rem;
}

.projects-section .card-container {
    text-decoration: none;
    color: inherit;
    border: 0.1rem solid var(--clr-surface);
    background-color: var(--clr-card-container);
    border-radius: var(--rc-rounded);
    padding: 1rem;
}

.projects-section .card .image {
    border-radius: var(--rc-rounded);
    margin-bottom: 1rem;
}

.projects-section .card-container:hover {
    border-color: var(--clr-outline-hover);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.skills-quals-section .list {
    padding-inline: 1rem;
    list-style-type: circle;
}

.qualifications-section .list {
    padding: 1rem;
    list-style-type: circle;
}

@media (min-width: 800px) {
    .projects-section .card-list,
    .skills-quals-section .dual-list {
        grid-template-columns: repeat(2, 1fr);
    }

    .skills-quals-section {
        grid-template-columns: 3fr 2fr;
    }

    .qualifications-section {
        padding-inline: 1rem;
    }
}
</style>
