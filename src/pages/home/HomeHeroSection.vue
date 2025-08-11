<script setup lang="ts">
import TheLink from '@/components/TheLink.vue';
import ThePersona from '@/components/ThePersona.vue';
import useDotParticles from '@/composables/useDotParticles';
import useMobileDetector from '@/composables/useMobileDetector';
import { personaData } from '@/data/profile/persona';
import { socialData } from '@/data/profile/socials';
import { particleData } from '@/data/ui/particle';
import { sizeConstraints } from '@/data/ui/size';

const { isMobile } = useMobileDetector(sizeConstraints.mobileBreakpoint);

const { dots } = useDotParticles(particleData.determineCount(isMobile.value));
</script>

<template>
    <section aria-label="Home Page Hero Section" class="home-hero">
        <ThePersona :avatar="personaData.avatarUri" :name="personaData.name"
        :status="personaData.status" />
        <h1>
            I'm Harsh &mdash; a <span class="highlight">Software Developer</span>,
            crafting digital experiences that feel intentional.
        </h1>
        <ul class="social-list">
            <li v-for="social in socialData.all" :key="social.social" class="social-item">
                <TheLink linkable="external" :to="social.uri" new-window>
                    {{ social.social }}
                </TheLink>
            </li>
        </ul>
        <span class="explore-arrow">&downarrow; scroll to explore</span>
        <div class="dots-container" aria-hidden="true">
            <div v-for="(dot, idx) in dots"
                :key="`${idx}${dot.positionX}${dot.positionY}`" aria-hidden="true"
                :data-dot-highlight="dot.unique" class="dot"
                :style="{'left':`${dot.positionX}%`, 'top':`${dot.positionY}%`}"
            >
            </div>
        </div>
    </section>
</template>

<style lang="css">
.home-hero {
    min-height: 85dvh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.home-hero .explore-arrow {
    color: var(--colour-text-faded);
}

.home-hero .highlight {
    background-color: var(--colour-bk-highlight-subtle);
    color: var(--colour-text-highlight);
}

.home-hero .social-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
}

.home-hero .dots-container {
    position: relative;
    overflow: clip;
    flex-grow: 1;
}

.home-hero .dot {
    opacity: 0.75;
    position: absolute;
    background-color: var(--colour-bk-medium);
    height: 0.5rem;
    width: 0.5rem;
    z-index: -1;
    border-radius: 1px;
}

.home-hero .dot:hover {
    background: red;
}

.home-hero .dot[data-dot-highlight='true'] {
    background-color: inherit;
    border: 0.15rem solid var(--colour-bk-highlight);
}
</style>
