<template>
    <section class="hero">
        <OctogonComponent :width="50" :height="50" />
        <h1 class="hero__title">
            About Me.
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
    setup() { },
});
</script>

<style lang="css" scoped>
.hero {
    height: 90vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
    text-align: center;
    gap: 2rem;
}

.hero .highlight {
    font-style: italic;
    font-weight: 700;
}

.hero .hero__title {
    text-transform: uppercase;
}

.hero .hero__about,
.hero .hero__aim {
    max-width: 30ch;
}

</style>