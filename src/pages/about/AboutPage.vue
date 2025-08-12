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
        <p>
            Hi, I'm Harsh, a developer drawn the quiet craft of programming. I enjoy
            designing tools that make sense - without making noise. I'm currently
            seeking experience where I can learn, contribute, and refine my craft.
        </p>
        <TheDivider orientation="horizontal" />
        <section class="skills-section" aria-label="Skills">
            <h2>Skills</h2>
            <ul class="skills-list">
                <li v-for="service in serviceData.all" :key="service.name">
                    <TheCard appearance="outline" linkable="none" class="skill-card">
                        <div role="region" class="header-group">
                            <TheIcon :name="service.icon" :filled="false" /><br/>
                            <span>{{ service.name }}</span>
                        </div>
                        <p class="description">{{ service.description }}</p>
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
        <span aria-hidden="true"></span>
        <section class="philosophy-section" aria-label="Philosophy">
            <h2>Philosophy</h2>
            <ul>
                <li>Software should feel quiet - clear, scalable and unobtrusive</li>
                <li>Every artifact, from code to documentation, is part of a living system</li>
                <li>Modularity isn't just technical - it's cognitive. It helps people think clearly.</li>
            </ul>
        </section>
        <TheDivider orientation="horizontal" />
        <section class="contact-section" aria-label="Contact">
            <TheQuote>
                Thanks for reading. I build things that make sense &ndash; and make space.
            </TheQuote>
            <TheCard appearance="filled" linkable="none" class="social-link-card-wrapper">
                <ul aria-label="Socials List and CV PDF Link" class="link-list">
                    <li v-for="social in socialData.all" :key="social.social">
                        <TheLink linkable="external" class="social-link" :to="social.uri" new-window>
                            {{ social.social }}
                        </TheLink>
                    </li>
                    <li>
                        <TheLink linkable="external" to="/documents/harsh_cv.pdf" new-window>
                            View CV
                        </TheLink>
                    </li>
                </ul>
            </TheCard>
        </section>
    </article>
</template>

<style lang="css">
.about,
.about .skills-section,
.about .philosophy-section,
.about .contact-section {
    max-width: 75ch;
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
}

.about {
    gap: 1.5rem;
}

.about .link-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.about .link-list .social-link {
    display: flex;
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

.about .skill-card .description {
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
