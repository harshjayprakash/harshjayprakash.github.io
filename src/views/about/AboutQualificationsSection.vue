<script lang="ts">
import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';
import { defineComponent } from 'vue';

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
        <CardGroupComponent :desktopCols="4">
            <CardComponent>
                <span>hello</span>
            </CardComponent>
        </CardGroupComponent>
    </section>
</template>

<style lang="css" scoped>
</style>
