<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: { RouterView, HeaderComponent },
});

export default MainComponent;
</script>

<template>
    <HeaderComponent />
    <RouterView />
</template>

<style lang="css" scoped>
</style>
