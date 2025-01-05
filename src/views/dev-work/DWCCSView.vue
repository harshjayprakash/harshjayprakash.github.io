<template>
    <ProjectArticleComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProjectArticleComponent from '@/components/ProjectArticleComponent.vue';

export default defineComponent({
    name: 'DWCCSView',
    components: { ProjectArticleComponent }
});
</script>

<style lang="css" scoped>

</style>
