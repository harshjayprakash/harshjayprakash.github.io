<script lang="ts">
import { defineComponent } from 'vue';

const HomeHeroSection = defineComponent({
    name: 'HomeHeroSection',
});

export default HomeHeroSection;
</script>

<template>
    <section class="home-hero" aria-label="Hero Section">
        <div class="glow" aria-hidden="true"></div>
        <h1 class="greeting">
            Hi, I'm Harsh<br/>
            &mdash; a programmer and artist<br/>
            based in Southampton, UK.
        </h1>
        <span>&downarrow; scroll to explore</span>
    </section>
</template>

<style lang="css" scoped>
.home-hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    place-items: center;
    place-content: center;
}

.glow {
    position: absolute;
    height: 10rem;
    width: 10rem;
    background-color: var(--clr-surface-glow);
    filter: blur(100px);
    top: 37vh;
    z-index: -1;
}
</style>
