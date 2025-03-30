<script lang="ts">
import { defineComponent } from 'vue';

import AboutMeSection from '@/pages/about/AboutMeSection.vue';
import AboutQualificationsSection from '@/pages/about/AboutQualificationsSection.vue';

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
