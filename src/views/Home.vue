<template>
    <section class="hero">
        <h1 class="hero__title">About Me.</h1>
        <p class="hero__about">
            I am a 
            <span class="highlight">programmer</span> 
            and 
            <span class="highlight">artist</span> 
            based in Southampton.
        </p>
        <p class="hero__aim">
            My aim is to blend creativity with precision, crafting projects that are both
            beautifully simple and of the higest quality.
        </p>
        <p class="hero__arrow">&DownArrow;</p>
    </section>
    <section class="about">
        <h2 class="about__title">Get to know me.</h2>
        <div class="about__container">
            <div class="about__image-container">
                <img class="about__profile-picture" 
                    :src="profilePictureUri" alt="profile picture" />
            </div>
            <p class="about__greeting">
                Hi there! I'm Harsh Jayprakash, a versatile programmer and artist 
                passionate about pushing the boundaries of creativity and technical 
                precision.
                <br />
                <RouterLink class="about__more link-label" to="/about">
                    Read More &RightArrow;
                </RouterLink>
            </p>
        </div>
    </section>
    <section class="dev-projects">
        <h2 class="dev-projects__title">Developer Portfolio Highlights.</h2>
        <p class="dev-projects__context">
            Below show some of my recent projects.
        </p>
        <div class="dev-projects__container">
            <article class="dev-project__card" v-for="project in devProjectsToShow">
                <span class="dev-project__title">{{ project.name }}</span>
                <small class="dev-project__description">
                    {{ project.ref }} ~ {{ project.technology }} &mdash; {{ project.description }}
                </small>
                <RouterLink class="dev-project__link link-label" :to="project.url">
                    Views Details &RightArrow;
                </RouterLink>
            </article>
            <article class="dev-project__card view-more-card">
                <RouterLink class="card-link link-label" to="/portfolio/dev">
                    View More &RightArrow;
                </RouterLink>
            </article>
        </div>
    </section>
    <section class="contact">
        <h2 class="contact__title">Get in touch.</h2>
        <div class="contact-options">
            <article class="social-card" v-for="social in socials">
                <span class="social-card__service">{{ social.name }}</span>
                &emsp; &mdash; &emsp;
                <a :href="social.uri" class="social-card__handle link-label">
                    {{ social.value }} (&nearrow;)
                </a>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import router from '@/router';
import { devProjects, socialList } from '@/store/data';
import type { DevProject, Social } from '@/store/data.type';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        const profilePictureUri: string = 
            'https://avatars.githubusercontent.com/u/58461297?s=96&v=4';
        const devProjectRefs: string[] = ['UOW 2450', 'HX 2150', 'HX 2050',];
        const devProjectsToShow: DevProject[] = devProjects
            .filter(project => devProjectRefs.includes(project.ref))
            .sort((a, b) => devProjectRefs.indexOf(a.ref) - devProjectRefs.indexOf(b.ref));
        const socials: Social[] = socialList;
        return { profilePictureUri, devProjectsToShow, socials };
    },
    setup() {},
});
</script>

<style lang="css" scoped>
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    gap: 2rem;
}

.hero > * {
    text-align: center;
    padding: 0 1rem;
    max-width: 40ch;
}

.hero .hero__title,
.about .about__title,
.dev-projects .dev-projects__title,
.contact .contact__title {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
}

.hero .highlight {
    border-bottom: 0.2rem solid var(--clr-accent-container);
}

.about {
    padding: 5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about .about__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about .about__profile-picture {
    display: block;
    margin: auto;
    border-radius: 50px;
    border: 0.3rem solid var(--clr-surface-container-high);
}

.about .about__greeting {
    text-align: center;
    max-width: 40ch;
    margin: auto;
    display: flex;
    flex-direction: column;
    place-items: center;
    gap: 1rem;
}

.link-label {
    text-decoration: none;
    color: inherit;
    width: fit-content;
    border-bottom: 0.15rem solid var(--clr-accent-container);
}

.link-label:hover {
    border-bottom-color: var(--clr-accent-variant);
}

.dev-projects,
.contact {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.dev-projects .dev-projects__context {
    text-align: center;
}

.dev-projects .dev-projects__container {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.dev-projects .dev-project__card {
    padding: 1rem;
}

.dev-projects .dev-project__card > * {
    display: block;
}

.contact .contact-options {
    display: grid;
}

.contact .social-card {
    padding: 1rem;
}

@media (min-width: 800px) {
    .about .about__container {
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .about .about__image-container {
        display: flex;
        place-items: center;
        place-content: end;
    }

    .about .about__profile-picture {
        margin: 0;
    }

    .about .about__greeting {
        text-align: left;
        place-items: start;
        margin: 0;
    } 

    .dev-projects .dev-projects__container {
        grid-template-columns: repeat(2, 1fr);
        align-items: end;
    }

    .dev-projects .dev-projects__container {
        align-content: end;
    }

    .contact .contact-options {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

}
</style>