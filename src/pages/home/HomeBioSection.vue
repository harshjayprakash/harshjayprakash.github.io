<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
import TheDivider from '@/components/TheDivider.vue';
import { personaData } from '@/data/profile/persona';

const bioPts = personaData.about.bullets;
</script>

<template>
    <section class="home-bio" aria-label="Quick About">
        <TheDivider orientation="horizontal" />
        <h2>A Bit About Me.</h2>
        <div class="content" role="region">
            <ul class="bio-list">
                <li v-for="pt in bioPts" :key="pt">
                    {{ pt }}
                </li>
            </ul>
        </div>
        <TheButton linkable="internal" to="/about" appearance="outline">
            Read more ->
        </TheButton>
    </section>
</template>

<style lang="css">
.home-bio {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-bio .bio-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-inline: 1.25rem;
}

.home-bio .skill-title {
    margin-block-start: 1rem;
}
</style>
