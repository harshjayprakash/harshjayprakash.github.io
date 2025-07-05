<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';
import TheDivider from '@/components/TheDivider.vue';
import TheIcon from '@/components/TheIcon.vue';
import TheLink from '@/components/TheLink.vue';
import ThePersona from '@/components/ThePersona.vue';
import TheQuote from '@/components/TheQuote.vue';
import { personaData } from '@/data/profile/persona';
import { serviceData } from '@/data/profile/services';
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
            <p>
                I'm Harsh, a developer who enjoys the quiet craft of programming &ndash;
                understanding how things work, refining systems, and building tools that
                feel intentional. I care about clarity, accessibility, and the kind of
                polish that makes a product feel cohesive and considered.
            </p>
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
        </section>
        <section class="content">
            <p>
                I'm currently refining my design system with accesible focus outlines and
                semantic styling, exploring polymorphic components, and thinking about how
                branding can align with usability. I'm also continuing to explore creative
                coding and the expressive side of programming.
            </p>
        </section>
        <section>
            <ul class="skills-list">
                <li v-for="service in serviceData.all" :key="service.name">
                    <TheCard appearance="outline" linkable="none" class="skill-card">
                        <div role="region" class="header-group">
                            <TheIcon :name="service.icon" :filled="false" /><br/>
                            <span>{{ service.name }}</span>
                        </div>
                        <p>{{ service.description }}</p>
                        <div aria-hidden="true" class="card-spacer"></div>
                        <ul class="inner-list">
                            <li v-for="(skill, idx) in service.skills" :key="skill"
                                class="skill-item"
                            >
                                <small>
                                    {{ skill }}
                                </small>
                                <small v-if="idx != service.skills.length-1">
                                    &SmallCircle;
                                </small>
                            </li>
                        </ul>
                    </TheCard>
                </li>
            </ul>
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
    max-width: 75ch;
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

.about .skills-list {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 0;
}

.about .skills-list .inner-list {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0 0.5rem;
    color: var(--colour-text-faded-less);
}
.about .skills-list .header-group {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
}

.about .skill-card {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
}

.about .skill-item {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

.about .card-spacer {
    flex-grow: 1;
}

@media (min-width: 640px) {
    .about .skills-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
