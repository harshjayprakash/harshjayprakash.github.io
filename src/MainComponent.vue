<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: { RouterView },
});

export default MainComponent;
</script>

<template>
    <p>MainComponent</p>
    <RouterView />
</template>

<style lang="css" scoped>
</style>
