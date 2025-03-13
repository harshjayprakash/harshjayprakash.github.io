<script lang="ts">
import { defineComponent } from 'vue';

import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';

const AboutQualificationsSection = defineComponent({
    name: 'AboutQualificationsSection',
    components: {
        CardGroupComponent,
        CardComponent,
    }
});

export default AboutQualificationsSection;
</script>

<template>
    <section class="about-quals">
        <h2>Qualifications.</h2>
        <CardGroupComponent :desktopCols="3">
            <CardComponent>
                <span>Bachelor's Degree</span>
                <span>Computer Science</span>
            </CardComponent>
            <CardComponent>
                <span>A-Levels</span>
                <span>Computer Science, Maths and Fine Art</span>
            </CardComponent>
            <CardComponent>
                <span>GCSEs</span>
                <span>
                    English, Maths, Science, Geography, Spanish, Fine Art and Computer
                    Science
                </span>
            </CardComponent>
        </CardGroupComponent>
    </section>
</template>

<style lang="css" scoped>
</style>
