<script lang="ts" setup>
import HomeBioSection from './HomeBioSection.vue';
import HomeContactSection from './HomeContactSection.vue';
import HomeIntroSection from './HomeIntroSection.vue';
import HomeWorkSection from './HomeWorkSection.vue';
</script>

<template>
    <article aria-label="Home Page" class="home">
        <h1 id="home">Home Page</h1>
        <HomeIntroSection />
        <HomeBioSection />
        <HomeWorkSection />
        <HomeContactSection />
    </article>
</template>
