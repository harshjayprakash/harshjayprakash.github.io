<template>
    <section class="project-article">
        <h1>{{ project?.name }}</h1>
    </section>
</template>

<script lang="ts">
import { getProjectFromRoute } from '@/service/projectRetriever';
import type { DeveloperProject } from '@/store/interface/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DWDWFView',
    data() {
        const project: DeveloperProject | undefined = getProjectFromRoute();
        return { project };
    }
});
</script>

<style lang="css" scoped>

</style>
