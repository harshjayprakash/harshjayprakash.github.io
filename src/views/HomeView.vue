<script lang="ts">
import { defineComponent } from 'vue';

const HomeView = defineComponent({
    name: 'HomeView',
    setup() {
        const _profilePicture = 'https://avatars.githubusercontent.com/u/58461297?v=4';

        return {
            personaPicture: _profilePicture as String,
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

}
</style>
