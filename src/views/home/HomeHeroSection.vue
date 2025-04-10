<script lang="ts" setup>
import PersonaWidget from '@/components/PersonaWidget.vue';
import getAvatar from '@/data/avatar';

const { avatar } = getAvatar();
</script>

<template>
    <section aria-label="Hero" class="hero">
        <PersonaWidget
            :avatar
            aria-label="Image of Harsh Jayprakash, a Software Engineer"
            name="Harsh Jayprakash"
            title="Software Engineer"
        />
        <h1 class="greeting">
            Hi. I'm Harsh &mdash; a <i>Software Engineer</i> based in Southampton
            UK<span class="faded">, with a focus on creating digital experiences that
            balance aesthetics and functionality.</span>
        </h1>
        <span class="arrow faded">&downarrow; scroll to explore.</span>
    </section>
</template>

<style lang="css" scoped>
.hero {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    height: 90vh;
    gap: 2rem;
}

.greeting {
    margin-block-end: 5rem;
    max-width: 30ch;
    text-align: center;
}

.faded {
    color: var(--colour-text-faded);
}
</style>
