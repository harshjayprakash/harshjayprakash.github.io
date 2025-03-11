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
        <h2>Services.</h2>
        <CardGroupComponent :desktopCols="3">
            <CardComponent>
                <span>Front-End Web Development</span>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Vue</li>
                    <li>Angular</li>
                </ul>
            </CardComponent>
            <CardComponent>
                <span>Traditional Development</span>
                <ul>
                    <li>Java</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Visual Basic .NET</li>
                    <li>C#</li>
                    <li>Pascal</li>
                </ul>
            </CardComponent>
            <CardComponent>
                <span>UI/UX</span>
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
