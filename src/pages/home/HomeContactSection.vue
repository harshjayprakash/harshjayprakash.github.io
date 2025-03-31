<script setup lang="ts">
import DividerWidget from '@/components/DividerWidget.vue';
import LinkWidget from '@/components/LinkWidget.vue';
import PersonaWidget from '@/components/PersonaWidget.vue';

import getSocialsData from '@/store/socials';

const { socials } = getSocialsData();
</script>

<template>
    <section class="home-contact" aria-label="Contact Section">
        <section class="title-status" aria-label="Call to Action Text">
            <h2>
                Looking to collaborate?<br />
                or say hello? Get in touch.
            </h2>
            <PersonaWidget
                name="Harsh Jayprakash"
                status="Available for work"
                imageUri="https://avatars.githubusercontent.com/u/58461297?v=4"
                indicator="available"
                aria-label="Harsh's Current Status"
            >
                Looking for work.
            </PersonaWidget>
        </section>
        <div class="social-list">
            <article
                class="social-row"
                v-for="(social, idx) in socials" v-bind:key="idx"
            >
                <LinkWidget
                    variant="external"
                    v-bind:path="social.uri.toString()">
                        {{ social.name }}
                </LinkWidget>
                <DividerWidget />
            </article>
            <article>
                <LinkWidget
                    variant="external"
                    path="/assets/harsh_cv.PDF"
                >
                    View CV (PDF)
                </LinkWidget>
            </article>
        </div>
    </section>
</template>

<style lang="css" scoped>
.home-contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.home-contact .title-status {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

@media (min-width: 768px) {
    .home-contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
