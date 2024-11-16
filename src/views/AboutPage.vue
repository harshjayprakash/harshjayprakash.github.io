<template>
    <section class="about">
        <AboutQualificationsSection />
    </section>
</template>

<script lang="ts">
import AboutExperienceSection from '@/components/sections/About/AboutExperienceSection.vue';
import AboutQualificationsSection from '@/components/sections/About/AboutQualificationsSection.vue';
import AboutSkillsSection from '@/components/sections/About/AboutSkillsSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutPage',
    components: { 
        AboutQualificationsSection, 
        AboutSkillsSection, 
        AboutExperienceSection 
    },
    setup() { },
});
</script>