<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import VertexProvider from './components/VertexProvider.vue';
import VertexHeader from './components/VertexHeader.vue';

export default defineComponent({
    name: 'MainComponent',
    components: { RouterView, VertexProvider, VertexHeader, },
});
</script>

<template>
    <VertexProvider>
        <VertexHeader />
        <RouterView class="content" />
    </VertexProvider>
</template>

<style lang="css" scoped>
</style>
