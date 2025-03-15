<script lang="ts">
import { defineComponent, provide } from 'vue';
import { RouterView } from 'vue-router';

import useMobileDetector from '@/composables/useMobileDetector';

import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SurfaceComponent from './components/SurfaceComponent.vue';

const MainComponent = defineComponent({
    name: 'MainComponent',
    components: {
        RouterView,
        HeaderComponent,
        FooterComponent,
        SurfaceComponent
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
    <SurfaceComponent paddingInline="2rem" maxWidth="60rem">
        <template v-slot:header>
            <HeaderComponent />
        </template>
        <RouterView />
        <template v-slot:footer>
            <FooterComponent />
        </template>
    </SurfaceComponent>
</template>

<style lang="css" scoped>
</style>
