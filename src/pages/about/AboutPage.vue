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
            <TheDivider orientation="vertical" :height="1.5" :thickness="0.2" />
            <TheLink linkable="external" to="/documents/harsh_cv.pdf" new-window>
                View CV
        </TheLink>
        </TheCard>
        <section class="content">
            <h2>Introduction</h2>
            <p>
                I'm Harsh, a developer who enjoys the quiet craft of programming &ndash;
                understanding how things work, refining systems, and building tools that
                feel intentional. I care about clarity, accessibility, and the kind of
                polish that makes a product feel cohesive and considered.
            </p>
            <h3>More Details &mdash;</h3>
            <ul>
                <li>
                    A unified and cohesive design language - where structure, interaction,
                    and visual tone all speak the same language.
                </li>
                <li>
                    Helping others - whether it's through documentation, debugging, or
                    just making things easier to understand.
                </li>
                <li>
                    Building systems that scale without losing their clarity or purpose.
                </li>
            </ul>
            <h2>Current Focus</h2>
            <p></p>
            <h2>Skills</h2>
            <h2>Outside of programming</h2>
        </section>
    </article>
</template>

<style lang="css">
.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about .content {
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.about .social-link-card-wrapper {
    max-width: fit-content;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.about .link-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
