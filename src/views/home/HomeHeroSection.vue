<script lang="ts">
import { defineComponent } from 'vue';

const HomeHeroSection = defineComponent({
    name: 'HomeHeroSection',
});

export default HomeHeroSection;
</script>

<template>
    <section class="home-hero">
        <h1 class="greeting">
            Hi, I'm Harsh
            <br />
            &mdash; a programmer and artist
            <br />
            based in Southampton, UK.
        </h1>
        <span>&downarrow; scroll</span>
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
</style>
