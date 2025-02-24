<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import VertexProvider from './components/VertexProvider.vue';

export default defineComponent({
    name: 'MainComponent',
    components: { RouterView, VertexProvider, },
});
</script>

<template>
    <VertexProvider>
        <p>Main Component</p>

        <RouterView />
    </VertexProvider>
</template>

<style lang="css" scoped>
</style>
