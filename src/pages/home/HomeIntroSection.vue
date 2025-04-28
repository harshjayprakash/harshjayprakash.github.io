<script lang="ts" setup>
import useDotParticles from '@/composables/useDotParticles';
import useMobileDetector from '@/composables/useMobileDetector';

const { isMobile } = useMobileDetector();

const _dotCount = isMobile.value ? 15 : 50;
const { dots } = useDotParticles(_dotCount);
</script>

<template>
    <section aria-label="Introduction" class="intro">
        <div aria-hidden="true" class="dots-container">
            <div
                v-for="(dot, idx) in dots"
                :key="`${idx}${dot.x}${dot.y}`"
                aria-hidden="true"
                class="dot"
                :style="{'left':`${dot.x}%`, 'top':`${dot.y}%`}"
                >
            </div>
        </div>
        <div aria-label="Greeting and Welcome" class="greeting-text" role="group">
            <h1 class="greeting" id="greeting">
                Hi, I'm Harsh &mdash; a
                <span class="block-highlight">Software Engineer</span><br />
                based in Southampton, UK.
            </h1>
            <p class="welcome">
                Crafting Human-centred, Functional, Thoughtful Digital Experiences.
            </p>
        </div>
        <span class="explore-arrow">&downarrow; scroll to explore</span>
    </section>
</template>

<style lang="css" scoped>
.intro {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    height: 85vh;
    place-content: center;
}

.dots-container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: inherit;
    z-index: -10;
    height: 90vh;
    width: 90%;
}

.dot {
    position: relative;
    background-color: var(--colour-bk-highlight-lightest);
    height: 0.25rem;
    width: 0.25rem;
    animation-name: fiCircle;
    animation-duration: 1s;
    filter: blur(1px);
}

.greeting-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.block-highlight {
    background-color: var(--colour-bk-highlight-subtle);
    color: var(--colour-text-highlight);
}

.welcome {
    max-width: 60ch;;
}

.explore-arrow {
    color: var(--colour-text-faded);
}

.emphasis {
    color: var(--colour-text-primary);
}

@keyframes fiCircle {
    from {
        translate: 0 500%;
        opacity: 0;
    }
    to {
        translate: 0 0;
        opacity: 1;
    }
}

@media (prefers-reduced-motion) {
    .dot {
        animation: none;
    }
}
</style>
