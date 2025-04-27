<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface IPosition {
    x: number;
    y: number;
}

const dots = ref<IPosition[]>([]);

onMounted(() => {
    const dotCount = 50;

    for (let idx = 0; idx < dotCount; idx++) {
        const posx = Math.floor(Math.random()*100);
        const posy = Math.floor(Math.random()*100);

        dots.value.push({x:posx, y:posy});
    }
});
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
.home .intro {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    height: 100vh;
    place-content: center;
}

.home .intro .dots-container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: inherit;
    z-index: -10;
    height: 90vh;
    width: 90%;
}

.home .intro .dots-container .dot {
    position: relative;
    background-color: var(--colour-bk-accent-subtle);
    height: 0.25rem;
    width: 0.25rem;
    animation-name: fiCircle;
    animation-duration: 1s;
}

.home .intro .image {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}

.home .intro .greeting-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.home .intro .block-highlight {
    background-color: light-dark(var(--colour-200H), var(--colour-800H));
    color: light-dark(var(--colour-800H), var(--colour-200H));
}

.home .intro .welcome {
    max-width: 60ch;
    color: var(--colour-text-faded);
}

.home .intro .explore-arrow {
    color: var(--colour-text-faded);
}

.home .intro .emphasis {
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
</style>
