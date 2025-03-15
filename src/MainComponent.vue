<script lang="ts">
import { defineComponent, provide } from 'vue';
import { RouterView } from 'vue-router';

import useMobileDetector from '@/composables/useMobileDetector';

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
    setup() {
        const { isMobile, windowWidth } = useMobileDetector();
        provide('isMobile', isMobile);
        provide('windowWidth', windowWidth);
        return { isMobile };
    }
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
