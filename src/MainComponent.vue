<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';
import WrapperComponent from './components/WrapperComponent.vue';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: { RouterView, HeaderComponent, WrapperComponent },
});

export default MainComponent;
</script>

<template>
    <WrapperComponent>
        <HeaderComponent />
        <RouterView />
    </WrapperComponent>
</template>

<style lang="css" scoped>
</style>
