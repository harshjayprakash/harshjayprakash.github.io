<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';
import WrapperComponent from './components/WrapperComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SeparatorComponent from './components/SeparatorComponent.vue';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: { RouterView, HeaderComponent, WrapperComponent, FooterComponent, SeparatorComponent },
});

export default MainComponent;
</script>

<template>
    <WrapperComponent>
        <HeaderComponent />
        <SeparatorComponent />
        <RouterView />
        <FooterComponent />
    </WrapperComponent>
</template>

<style lang="css" scoped>
</style>
