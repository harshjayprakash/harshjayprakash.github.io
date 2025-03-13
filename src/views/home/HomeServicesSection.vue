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
                <small class="faded">
                    <span>Angular</span> &bullet;
                    <span>Vue</span> &bullet;
                    <span>HTML</span> &bullet;
                    <span>CSS</span>
                </small>
            </CardComponent>
            <CardComponent>
                <span>Traditional Development</span>
                <p>
                    Building robust, scalable applications tailored to the your business
                    needs.
                </p>
                <small class="faded">
                    <span>C</span> &bullet;
                    <span>Python</span> &bullet;
                    <span>Java</span> &bullet;
                    <span>Visual Basic .NET</span> &bullet;
                    <span>Pascal</span>
                </small>
            </CardComponent>
            <CardComponent>
                <span>UI/UX</span>
                <p>
                    Designing interfaces that balance aesthetics with functionality
                </p>
                <small class="faded">
                <span>Figma</span> &bullet;
                <span>Pen+Paper</span> &bullet;
                <span>MS Paint</span>
            </small>
            </CardComponent>
        </CardGroupComponent>
        <CardComponent>
            <span>Tools</span>
            <p></p>
            <small class="faded">
                <span>Windows</span> &bullet;
                <span>GNU+Linux</span> &bullet;
                <span>VSCode</span> &bullet;
                <span>Visual Studio</span> &bullet;
                <span>JetBrains</span> &bullet;
                <span>Git</span>
            </small>
        </CardComponent>
    </section>
</template>

<style lang="css" scoped>
.home-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
