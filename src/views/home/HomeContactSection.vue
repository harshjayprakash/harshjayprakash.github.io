<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';

import socials from '@/store/data/socials';
import type { ISocial } from '@/store/interfaces/Social';

const HomeContactSection = defineComponent({
    name: 'HomeContactSection',
    components: {
        DividerComponent,
        LinkComponent,
    },
    setup() {
        const _socialList = socials;

        return {
            socials: _socialList as ISocial[],
        }
    }
});

export default HomeContactSection;
</script>

<template>
    <section class="home-contact">
        <h2>Looking to collaborate? or Say Hello?</h2>
        <div class="social-list">
            <article class="social-row" v-for="(social, idx) in socials" v-bind:key="idx">
                <LinkComponent
                    variant="external"
                    v-bind:path="social.uri.toString()">
                        {{ social.name }}
                </LinkComponent>
                <DividerComponent />
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

@media (min-width: 768px) {
    .home-contact {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
