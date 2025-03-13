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
                    <span>Angular</span> &SmallCircle;
                    <span>Vue</span> &SmallCircle;
                    <span>HTML</span> &SmallCircle;
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
                    <span>C</span> &SmallCircle;
                    <span>Python</span> &SmallCircle;
                    <span>Java</span> &SmallCircle;
                    <span>Visual Basic .NET</span> &SmallCircle;
                    <span>Pascal</span>
                </small>
            </CardComponent>
            <CardComponent>
                <span>UI/UX</span>
                <p>
                    Designing interfaces that balance aesthetics with functionality
                </p>
                <small class="faded">
                <span>Figma</span> &SmallCircle;
                <span>Pen+Paper</span> &SmallCircle;
                <span>MS Paint</span>
            </small>
            </CardComponent>
        </CardGroupComponent>
        <CardComponent>
            <span>Tools</span>
            <p></p>
            <small class="faded">
                <span>Windows</span> &SmallCircle;
                <span>GNU+Linux</span> &SmallCircle;
                <span>VSCode</span> &SmallCircle;
                <span>Visual Studio</span> &SmallCircle;
                <span>JetBrains</span> &SmallCircle;
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

.faded {
    color: var(--clr-text-faded);
}
</style>
