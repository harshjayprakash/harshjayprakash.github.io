<script lang="ts">
import { defineComponent, provide } from 'vue';
import { RouterView } from 'vue-router';

import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import SurfaceComponent from '@/components/SurfaceComponent.vue';

import useMobileDetector from '@/composables/useMobileDetector';

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
    <SurfaceComponent>
        <template v-slot:header>
            <HeaderComponent />
        </template>
        <template v-slot:default>
            <RouterView />
        </template>
        <template v-slot:footer>
            <FooterComponent />
        </template>
    </SurfaceComponent>
</template>

<style lang="css" scoped>
</style>
