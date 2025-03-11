<script lang="ts">
import { defineComponent } from 'vue';

import AboutMeSection from '@/views/about/AboutMeSection.vue';
import AboutQualificationsSection from '@/views/about/AboutQualificationsSection.vue';

const AboutView = defineComponent({
    name: 'AboutView',
    components: {
        AboutMeSection,
        AboutQualificationsSection,
    }
});

export default AboutView;
</script>

<template>
    <AboutMeSection />
    <AboutQualificationsSection />
</template>

<style lang="css" scoped>
</style>
