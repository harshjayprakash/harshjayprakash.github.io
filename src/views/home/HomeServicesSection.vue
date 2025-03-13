<script lang="ts">
import { defineComponent } from 'vue';

import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';

const HomeServicesSection = defineComponent({
    name: 'HomeServicesSection',
    components: { CardGroupComponent, CardComponent },
});

export default HomeServicesSection;
</script>

<template>
    <section class="home-services">
        <h2>What I can do.</h2>
        <p></p>
        <CardGroupComponent v-bind:desktopCols="3">
            <CardComponent>
                <span>Front-End Web Development</span>
                <p>
                    Crafting responsive websites using modern front-end
                    technologies to create seamless user experiences.
                </p>
            </CardComponent>
            <CardComponent>
                <span>Traditional Development</span>
                <p>
                    Building robust, scalable applications tailored to the your business
                    needs.
                </p>
            </CardComponent>
            <CardComponent>
                <span>UI/UX</span>
                <p>
                    Designing interfaces that balance aesthetics with functionality
                </p>
            </CardComponent>
        </CardGroupComponent>
    </section>
</template>

<style lang="css" scoped>
.home-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
