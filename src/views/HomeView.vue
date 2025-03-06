<script lang="ts">
import { defineComponent } from 'vue';

import { IDeveloperProject } from '@/store/interfaces/DeveloperProject';
import developerProjects from '@/store/data/developerProjects';

const HomeView = defineComponent({
    name: 'HomeView',
    setup() {
        const _profilePicture = 'https://avatars.githubusercontent.com/u/58461297?v=4';
        const _devFilter = ['aap', 'xbk', 'wpq', 'dwf', 'lls', 'ccs'];
        const _devProjects = developerProjects
            .filter(project => project.available && project.abbreviation !== 'ppw')
            .sort((projectA, projectB) =>
                _devFilter.indexOf(
                    projectA.abbreviation.toString()) - _devFilter.indexOf(
                        projectB.abbreviation.toString())
            );

        return {
            personaPicture: _profilePicture as String,
            devProjects: _devProjects as IDeveloperProject[]
        }
    },
});

export default HomeView;
</script>

<template>
    <section class="hero">
        <article class="status">
            <img class="status__image" :src="personaPicture.toString()" alt="profile picture" />
            <small class="status__text">currently looking for work</small>
        </article>
        <h1 class="greeting">
            Hi. I'm Harsh Jayprakash
            <br />
            &mdash; a programmer and artist
            <br />
            based in Southampton, UK.
        </h1>
        <article class="socials">
            <a class="social__link" href="https://www.linkedin.com/in/harshjayprakash7/">
                Linkedin
            </a>
            <span>//</span>
            <a class="social__link" href="https://github.com/harshjayprakash">GitHub</a>
            <span>//</span>
            <a class="social__link" href="mailto:harshjayprakash@outlook.com">Email</a>
        </article>
    </section>
    <hr class="divider" />
    <section class="projects">
        <h2>Projects.</h2>
        <p>
            Below shows a collection of my undertaken projects, ranging from web
            development to traditional application development. Currently these cards link to their respective GitHub repositories. In future,
            each project will have seperate pages.
        </p>
        <div class="project-grid">
            <a
                class="project-card-wrapper"
                v-for="(project, idx) in devProjects" :key="idx"
                :href="project.gitUri.toString()"
            >
                <article class="project-card">
                    <img
                        class="project-card__image"
                        :src="`/img/${project.abbreviation}-screenshot.PNG`"
                        :alt="`${project.name} screenshot`"
                    />
                    <small class="project-card__timetech">
                        {{ project.timeframe }} &bullet; {{ project.technology }}
                    </small>
                    <h3 class="project-card__title">{{ project.name }}</h3>
                    <p class="project-card__description">{{ project.description }}</p>
                </article>
            </a>
        </div>
    </section>
</template>

<style lang="css" scoped>
.hero {
    margin-block: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.socials {
    display: flex;
    gap: 1rem;
}

.socials .social__link {
    font-weight: 300;
    text-decoration: none;
    color: inherit;
}

.socials .social__link:hover {
    text-decoration: solid underline;
}

.status {
    display: flex;
    width: fit-content;
    border-radius: 50rem;
    background-color: var(--clr-surface-object);
}

.status .status__image {
    inline-size: 2rem;
    block-size: 2rem;
    border-radius: 50%;
}

.status .status__text {
    padding-inline: 1rem;
    place-self: center center;
    opacity: 0.6;
}

.divider {
    border: 0;
    border-block-end: 0.1rem solid var(--clr-on-surface-neutral);
    opacity: 0.2;
}

.projects {
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.project-card-wrapper {
    text-decoration: none;
    color: inherit;
    background-color: var(--clr-surface-object);
    padding: 1rem;
}

.project-card .project-card__image {
    margin-block-end: 1rem;
}

.project-card .project-card__timetech {
    opacity: 0.7;
}

@media screen and (max-width: 768px) {
    .project-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

}
</style>
