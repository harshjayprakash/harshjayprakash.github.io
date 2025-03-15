<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import WrapperComponent from '@/components/WrapperComponent.vue';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: {
        RouterView,
        HeaderComponent,
        WrapperComponent,
        FooterComponent
    },
});

export default MainComponent;
</script>

<template>
    <WrapperComponent>
        <HeaderComponent />
        <RouterView />
        <FooterComponent />
    </WrapperComponent>
</template>

<style lang="css" scoped>
</style>
