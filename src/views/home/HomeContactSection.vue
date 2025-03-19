<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';

import socials from '@/store/data/socials';
import PersonaComponent from '@/components/PersonaComponent.vue';

const HomeContactSection = defineComponent({
    name: 'HomeContactSection',
    components: {
        DividerComponent,
        LinkComponent,
        PersonaComponent
    },
    setup() {
        return { socials };
    }
});

export default HomeContactSection;
</script>

<template>
    <section class="home-contact" aria-label="Contact Section">
        <section aria-label="Call to Action Text">
            <h2 aria->
                Looking to collaborate?
                <br/>
                or say hello? Get in touch.
            </h2>
            <br/>
            <br/>
            <PersonaComponent
                name="Harsh Jayprakash"
                status="Available for work"
                imageUri="https://avatars.githubusercontent.com/u/58461297?v=4"
                indicator="available"
                aria-label="Harsh's Current Status"
            >
                Looking for work.
            </PersonaComponent>
            <br/>
        </section>
        <section class="social-list" role="list">
            <article
                class="social-row"
                v-for="(social, idx) in socials" v-bind:key="idx"
                role="listitem"
                aria-label="Social Link with Decorative Divider"
            >
                <LinkComponent
                    variant="external"
                    v-bind:path="social.uri.toString()">
                        {{ social.name }}
                </LinkComponent>
                <DividerComponent />
            </article>
            <article role="listitem" aria-label="Link To View CV">
                <LinkComponent
                    variant="external"
                    path="/assets/harsh_cv_25h1_1.PDF"
                >
                    View CV
                </LinkComponent>
            </article>
        </section>
    </section>
</template>

<style lang="css" scoped>
.home-contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (min-width: 768px) {
    .home-contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
