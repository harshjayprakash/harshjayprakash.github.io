<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';
import TheLink from '@/components/TheLink.vue';
import { personaData } from '@/data/profile/persona';
import { socialData } from '@/data/profile/socials';
</script>

<template>
    <section class="home-contact" aria-label="Home Contact Section">
        <TheCard linkable="none" appearance="filled" elevate class="contact-card">
            <div class="contact-title" role="group">
                <h2>Say hello</h2>
                <p class="faded-text">
                    If you're working on something thoughtful &ndash; whether it's code,
                    design, or something in between &ndash; I'd be happy to connect.
                </p>
            </div>
            <ul class="link-list">
                <li v-for="social in socialData.all" :key="social.social"
                    class="link-item"
                >
                    <div role="group" class="link-wrapper">
                        <TheLink linkable="external" :to="social.uri">
                            {{ social.social }}
                        </TheLink>
                        <small class="faded-text">
                            {{ social.description }}
                        </small>
                    </div>
                </li>
                <li class="link-item">
                    <div role="group" class="link-wrapper">
                        <TheLink linkable="external" :to="personaData.cv.uri">
                            CV
                        </TheLink>
                        <small class="faded-text">
                            {{ personaData.cv.description }}
                        </small>
                    </div>
                </li>
            </ul>
        </TheCard>
    </section>
</template>

<style lang="css">
.home-contact .contact-card {
    border: 0.1rem solid var(--colour-bk-highlight);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
}

.home-contact .contact-card .contact-title {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-contact .link-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-contact .link-list .link-wrapper {
    display: flex;
    flex-direction: column;
}

.home-contact .faded-text {
    color: var(--colour-text-faded-less);
}

@media (min-width: 640px) {
    .home-contact .contact-card {
        border: 0.1rem solid var(--colour-bk-highlight);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
}
</style>
