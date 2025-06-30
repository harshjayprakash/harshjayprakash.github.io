<script setup lang="ts">
import TheLink from '@/components/common/TheLink.vue';
import ThePersona from '@/components/common/ThePersona.vue';
import useDotParticles from '@/composables/useDotParticles';
import useMobileDetector from '@/composables/useMobileDetector';
import { avatarData } from '@/data/profile/avatar';
import { socialData } from '@/data/profile/socials';
import { particleData } from '@/data/ui/particle';
import { sizeConstraints } from '@/data/ui/size';

const avatar = avatarData.uri;
const socials = socialData.all;

const { isMobile } = useMobileDetector(sizeConstraints.mobileBreakpoint);
const {
    dots,
    isHighlightDot } = useDotParticles(particleData.determineCount(isMobile.value));
</script>

<template>
    <section aria-label="Home Page Hero Section" class="home-hero">
        <ThePersona :avatar name="Harsh Jayprakash"
            status="Looking for experience/work." />
        <h1>
            I'm Harsh &mdash; a <span class="highlight">Software Developer</span>,
            crafting digital experiences that feel intentional.
        </h1>
        <ul class="social-list">
            <li v-for="social in socials" :key="social.social" class="social-item">
                <TheLink linkable="external" :to="social.uri">
                    {{ social.social }}
                </TheLink>
            </li>
        </ul>
        <div class="dots-container" ref="dots-container">
            <span class="explore-arrow">&downarrow; scroll to explore</span>
            <div
                v-for="(dot, idx) in dots"
                :key="`${idx}${dot.positionX}${dot.positionY}`"
                aria-hidden="true"
                class="dot" :data-dot-highlight="isHighlightDot(idx)"
                :style="{'left':`${dot.positionX}%`, 'top':`${dot.positionY}%`}"
            >
            </div>
        </div>
    </section>
</template>

<style lang="css">
.home-hero {
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.home-hero .explore-arrow {
    padding-inline-end: 1rem;
    padding-block: 0.75rem;
    border-radius: 0 0 5px 0;
    background-color: var(--colour-bk-primary);
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
    background-color: var(--colour-bk-secondary);
    border-radius: var(--rounded-default);
    z-index: -1;
}

.home-hero .dot {
    opacity: 0.75;
    position: relative;
    background-color: var(--colour-bk-medium);
    height: 0.5rem;
    width: 0.5rem;
    z-index: -1;
}

.home-hero .dot[data-dot-highlight='true'] {
    background-color: inherit;
    border: 0.15rem solid var(--colour-bk-highlight);
}

.home-hero .dot:hover {
    background-color: blue;
}
</style>
