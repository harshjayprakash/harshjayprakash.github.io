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
        <p class="hero__socials">
            <span v-for="social in socialList">
                <LinkComponent 
                    class="hero__social" 
                    link-type="external"
                    :to="social.uri"
                    
                >
                    {{ social.name }}
                </LinkComponent>
                <span>&ensp; // &ensp;</span>
            </span>
        </p>
        <p class="hero__arrow">&DownArrow;</p>
    </section>
</template>

<script lang="ts">
import LinkComponent from '@/components/ui/LinkComponent.vue';
import OctogonComponent from '@/components/ui/OctogonComponent.vue';
import { socialList } from '@/store/data/socialList';
import type { Social } from '@/store/interfaces/Social';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeHeroSection',
    components: { OctogonComponent, LinkComponent },
    data() {
        return { socialList }
    }
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
    max-width: 45ch;
    font-weight: 300;
}

.hero .hero__socials {
    font-weight: 300;
}

.hero .hero__social {
    font-weight: inherit;
    color: inherit;
    text-decoration: none;
}

</style>