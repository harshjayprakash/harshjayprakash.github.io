<script setup lang="ts">
import TheCard from '@/components/common/TheCard.vue';
import TheDivider from '@/components/common/TheDivider.vue';
import TheLink from '@/components/common/TheLink.vue';
import ThePersona from '@/components/common/ThePersona.vue';
import TheQuote from '@/components/common/TheQuote.vue';
import { personaData } from '@/data/profile/persona';
import { socialData } from '@/data/profile/socials';

</script>

<template>
    <article aria-label="About" class="about">
        <h1>About</h1>
        <ThePersona :avatar="personaData.avatarUri" :name="personaData.name"
            :status="personaData.status" />
        <TheQuote>
            I enjoy the quiet details &mdash; the ones that make things feel intentional.
        </TheQuote>
        <TheCard appearance="filled" linkable="none" class="social-link-card-wrapper">
            <ul aria-label="Socials List and CV PDF Link" class="link-list">
                <li v-for="social in socialData.all" :key="social.social">
                    <TheLink linkable="external" :to="social.uri" new-window>
                        {{ social.social }}
                    </TheLink>
                </li>
            </ul>
            <TheDivider orientation="vertical" :height="1.5" :thickness="0.1" />
            <TheLink linkable="external" to="/documents/harsh_cv.pdf" new-window>
                View CV
        </TheLink>
        </TheCard>
        <section>
            <h2>Titled</h2>

        </section>

        <!-- <section>
            <h2>What I value</h2>
            <ul>
                <li>Clarity over Cleverness</li>
                <li>Accessibility as a baseline, not a bonus</li>
                <li>Systems that scale</li>
                <li>Design that feels cohesive, not just consistant</li>
            </ul>
        </section> -->

<!--
        <section>
            <h2>Introduction</h2>
        </section>

        <section>
            <h2>A little bit about me.</h2>
        </section>
        <section>
            <h2>What I Value</h2>
        </section>
        <section>
            <h2>How I got Here</h2>
        </section>
        <section>
            <h2>What I'm working On</h2>
        </section>
        <section>
            <h2>Outside of Code</h2>
        </section> -->
    </article>
</template>

<style lang="css">
.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about .social-link-card-wrapper {
    max-width: fit-content;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    /* flex-direction: column; */
}

.about .link-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    /* flex-direction: column; */
}

/* @media (min-width: 768px) {
    .about .social-link-card-wrapper {
        max-width: fit-content;
        display: flex;
        gap: 1rem;
        flex-direction: row;
    }

    .about .link-list {
        flex-direction: row;
    }

} */


</style>
