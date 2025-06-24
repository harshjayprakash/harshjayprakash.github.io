<script setup lang="ts">
import TheLink from '@/components/TheLink.vue';
import ThePersona from '@/components/ThePersona.vue';
import useDotParticles from '@/composables/useDotParticles';
import useMobileDetector from '@/composables/useMobileDetector';
import getAvatar from '@/data/avatar';
import getSizeConstraints from '@/data/sizing';

const { avatar } = getAvatar();
const { mobileBreakpoint } = getSizeConstraints();
const { isMobile } = useMobileDetector(mobileBreakpoint);

const _dotCount = isMobile.value ? 45 : 60;
const { dots } = useDotParticles(_dotCount);
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
            <li class="social-item"><TheLink
                variant="external"
                to="mailto:harshjayprakash@outlook.com"
                new-window>Email</TheLink></li> //
            <li class="social-item"><TheLink
                variant="external"
                to="https://www.linkedin.com/in/harshjayprakash7/"
                new-window>LinkedIn</TheLink></li> //
            <li class="social-item"><TheLink
                variant="external"
                to="https://github.com/harshjayprakash"
                new-window>GitHub</TheLink></li>
        </ul>
        <div class="dots-container">
            <span class="explore-arrow">&downarrow; scroll to explore</span>
            <div
                v-for="(dot, idx) in dots"
                :key="`${idx}${dot.x}${dot.y}`"
                aria-hidden="true"
                class="dot"
                :style="{'left':`${dot.x}%`, 'top':`${dot.y}%`}"
                >
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.home-hero {
    min-height: 80dvh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.explore-arrow {
    padding-inline-end: 1rem;
    padding-block: 0.75rem;
    border-radius: 0 0 5px 0;
    background-color: var(--colour-bk-primary);
    color: var(--colour-text-faded);
}

.highlight {
    background-color: var(--colour-bk-highlight-subtle);
    color: var(--colour-text-highlight);
}

.social-list {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
}

.dots-container {
    overflow: clip;
    flex-grow: 1;
    background-color: var(--colour-bk-secondary);
    border-radius: var(--rounded-default);
    z-index: -1;
}

.dot {
    opacity: 0.5;
    position: relative;
    background-color: var(--colour-bk-inverted);
    height: 0.5rem;
    width: 0.5rem;
    z-index: -1;
}

.dot:hover {
    background-color: blue;
}
</style>
