<template>
    <section class="home">
        <section class="hero">
            <img
                class="profile-picture"
                :src="profilePictureUri.toString()"
                alt="profile picture"
            />
            <h1 class="greeting">
                Hello. I'm Harsh Jayprakash &mdash; a programmer and artist based in
                Southampton, UK.
            </h1>
            <div class="socials-list">
                <a class="social-link"
                    v-for="(social, index) in socials"
                    :key="social.name.toString()"
                    :href="social.uri.toString()"
                >
                    {{ social.name }}
                    <span v-if="index != socials.length - 1">
                        &#x2218;
                    </span>
                </a>
            </div>
        </section>
        <section class="recent-projects">
            <h2 class="title">Projects.</h2>
            <div class="projects-list">
                <RouterLink
                    class="project-card-container"
                    v-for="project in projectsToShow"
                    :key="project.reference.toString()"
                    :to="`/work/dev/${project.slug}`"
                >
                    <article class="project-card">
                        <img
                            class="image"
                            :src="`/img/dev/${project.abbreviation}-screenshot.PNG`"
                            :alt="`${project.name} screenshot`" />
                        <small class="time">{{ project.timeframe }}</small>
                        <span class="title">{{ project.name }}</span>
                        <p class="description">{{ project.description }}</p>
                    </article>
                </RouterLink>
            </div>
        </section>
    </section>
    <section class="skills">
        <h2>Skills.</h2>
        <div class="skill-list-container">
            <div class="technical-skills">
                <h3 class="title">Technical</h3>
                <ul class="skills-list">
                    <li
                        class="skill"
                        v-for="(skill, index) in technicalSkills"
                        :key="index">
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="traditional-skills">
                <h3 class="title">Traditional</h3>
                <ul class="skills-list">
                    <li
                        class="skill"
                        v-for="(skill, index) in traditionalSkills"
                        :key="index">
                        {{ skill }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="qualifications">
        <h2>Qualifications.</h2>
        <ul class="quals-list">
            <li class="qual">Bachelor's in Computer Science</li>
            <li class="qual">A-Levels in Computer Science, Maths and Fine Art</li>
            <li class="qual">
                GCSEs in English, Maths, Science, Geography, Spanish, Computer Science and
                Fine Art
            </li>
        </ul>
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
.hero {
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 60ch;
}

.hero .profile-picture {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.hero .socials-list {
    display: flex;
    gap: 0.5rem;
}

.hero .socials-list .social-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    gap: 0.5rem;
}

.recent-projects .projects-list {
    padding: 2rem 0;
    display: grid;
    gap: 2rem;
}

.recent-projects .project-card-container {
    text-decoration: none;
    color: inherit;
    background-color: var(--clr-card-container);
    color: var(--clr-on-card-container);
    border: 0.1rem solid var(--clr-outline);
    padding: 1rem;
}

.recent-projects .project-card-container:hover {
    background: var(--clr-card-container-hover);
}

.recent-projects .project-card {
    display: flex;
    flex-direction: column;
}

.recent-projects .project-card .image {
    margin: 0 0 1rem 0;
}

.recent-projects .project-card .title {
    font-weight: 400;
}

.recent-projects .project-card .description {
    color: var(--clr-on-surface-faded);
}

.skills {
    padding: 2rem 0;
}

.skills .skill-list-container {
    display: grid;
    gap: 2rem;
    padding: 1rem 0;
}

.skills .skills-list {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 0 2.5rem;
    padding: 0 0 0 1rem;
}

.qualifications .quals-list {
    padding: 1rem 1rem;
}

.skills .skill,
.qualifications .qual {
    list-style: circle;
}


@media (min-width: 768px) {
    .recent-projects .projects-list,
    .skills .skill-list-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
