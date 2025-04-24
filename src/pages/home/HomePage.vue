<script lang="ts" setup>
import HomeBioSection from './HomeBioSection.vue';
import HomeContactSection from './HomeContactSection.vue';
import HomeIntroSection from './HomeIntroSection.vue';
import HomeWorkSection from './HomeWorkSection.vue';
</script>

<template>
    <article aria-label="Home Page" class="home">
        <HomeIntroSection />
        <HomeBioSection />
        <HomeWorkSection />
        <HomeContactSection />
    </article>
</template>

<style lang="css" scoped>
.home {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
</style>
