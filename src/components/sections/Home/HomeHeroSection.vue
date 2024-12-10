<template>
    <section class="hero">
        <h1 class="hero__title">
            Harsh Jayprakash.
        </h1>
        <p class="hero__about">
            I am a 
            <span class="highlight">programmer</span> 
            and 
            <span class="highlight">artist</span> 
            based in Southampton.
        </p>
        <p class="hero__aim">
            My aim is to blend creativity with precision, crafting projects that are both
            beautifully simple and of the higest quality.
        </p>
        <p class="hero__arrow">&DownArrow;</p>
    </section>
</template>

<script lang="ts">
import OctogonComponent from '@/components/ui/OctogonComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeHeroSection',
    components: { OctogonComponent },
});
</script>

<style lang="css" scoped>
.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    place-content: center;
    gap: 2rem;
}

.hero .highlight {
    font-weight: 500;
}

.hero .hero__title {
    font-family: 'Overpass Variable', sans-serif;
    font-size: 2.5rem;
}

.hero .hero__about,
.hero .hero__aim {
    max-width: 50ch;
    font-weight: 300;
}

</style>