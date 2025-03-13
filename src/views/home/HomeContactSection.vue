<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';

import socials from '@/store/data/socials';
import type { ISocial } from '@/store/interfaces/Social';

const HomeContactSection = defineComponent({
    name: 'HomeContactSection',
    components: { LinkComponent, DividerComponent },
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
        <h2>Say Hello.</h2>
        <div class="social-list">
            <article class="social-row" v-for="(social, idx) in socials" :key="idx">
                <LinkComponent
                    variant="external"
                    :path="social.uri.toString()">
                    <span class="social__name">
                        {{ social.name }}
                    </span>
                    <span class="social__tag">
                        {{ social.tag }}
                    </span>
                </LinkComponent>
                <DividerComponent />
            </article>
        </div>
    </section>
</template>

<style lang="css" scoped>
.social-list {
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    place-items: center;
}

.social-row {
    display: flex;
}

.social-list .social__tag {
    place-self: end;
}
</style>
