<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';
import PersonaComponent from '@/components/PersonaComponent.vue';

import getSocialData from '@/store/data/socials';

const HomeContactSection = defineComponent({
    name: 'HomeContactSection',
    components: {
        DividerComponent,
        LinkComponent,
        PersonaComponent
    },
    setup() {
        const { socials } = getSocialData();
        return { socials };
    }
});

export default HomeContactSection;
</script>

<template>
    <section class="home-contact" aria-label="Contact Section">
        <section class="title-status" aria-label="Call to Action Text">
            <h2>
                Looking to collaborate?<br />
                or say hello? Get in touch.
            </h2>
            <PersonaComponent
                name="Harsh Jayprakash"
                status="Available for work"
                imageUri="https://avatars.githubusercontent.com/u/58461297?v=4"
                indicator="available"
                aria-label="Harsh's Current Status"
            >
                Looking for work.
            </PersonaComponent>
        </section>
        <div class="social-list">
            <article
                class="social-row"
                v-for="(social, idx) in socials" v-bind:key="idx"
            >
                <LinkComponent
                    variant="external"
                    v-bind:path="social.uri.toString()">
                        {{ social.name }}
                </LinkComponent>
                <DividerComponent />
            </article>
            <article>
                <LinkComponent
                    variant="external"
                    path="/assets/harsh_cv.PDF"
                >
                    View CV (PDF)
                </LinkComponent>
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
