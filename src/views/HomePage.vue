<template>
    <section class="home">
        <HomeHeroSection />
        <HomeAboutSection />
        <HomeHighlightsSection />
        <HomeGetInTouchSection />
    </section>
</template>

<script lang="ts">
import HomeAboutSection from '@/components/sections/Home/HomeAboutSection.vue';
import HomeGetInTouchSection from '@/components/sections/Home/HomeGetInTouchSection.vue';
import HomeHeroSection from '@/components/sections/Home/HomeHeroSection.vue';
import HomeHighlightsSection from '@/components/sections/Home/HomeHighlightsSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomePage',
    components: { 
        HomeHeroSection, 
        HomeAboutSection, 
        HomeHighlightsSection,
        HomeGetInTouchSection,
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.home {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 5rem;
}
</style>