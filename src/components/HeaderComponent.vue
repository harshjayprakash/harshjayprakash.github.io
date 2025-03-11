<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, type Ref } from 'vue';

import NavComponent from '@/components/NavComponent.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';
import DividerComponent from '@/components/DividerComponent.vue';

const HeaderComponent = defineComponent({
    name: 'HeaderComponent',
    components: { NavComponent, SpacerComponent, DividerComponent },
    setup() {
        const showNavigation = ref(false);
        const desktopMode = ref(window.innerWidth > 768);

        function updateDeviceMode() {
            desktopMode.value = (window.innerWidth > 768);
        }

        onMounted(() => {
            window.addEventListener('resize', updateDeviceMode);
        });

        onUnmounted(() => {
            window.addEventListener('resize', updateDeviceMode);
        });

        return {
            isNavShown: showNavigation as Ref<Boolean>,
            isDesktopMode: desktopMode as Ref<Boolean>,
        }
    },
    methods: {
        toggleNavigationVisibility() {
            this.isNavShown = (this.isNavShown) ? false : true;
        }
    }
});

export default HeaderComponent;
</script>

<template>
    <header class="header">
        <button
            class="header__menu-button"
            @click="toggleNavigationVisibility"
            v-if="!isDesktopMode"
        >
            &#x2630;
        </button>
        <span class="title">Harsh.</span>
        <DividerComponent variant="vertical" v-if="isDesktopMode" />
        <NavComponent v-if="isDesktopMode" />
    </header>
    <SpacerComponent space="1rem" />
    <NavComponent
        variant="mobile"
        v-if="isNavShown"
        @onLinkClick="toggleNavigationVisibility()"
    />
</template>

<style lang="css" scoped>
.header {
    background-color: var(--clr-header-bk);
    position: sticky;
    top: 1rem;
    display: flex;
    width: fit-content;
    padding-block: 0.75rem;
    padding-inline: 1rem;
    box-shadow:
        0 0.25rem 0.375rem -0.0625rem var(--clr-header-shadow),
        0 0.125rem 0.25rem -0.125rem var(--clr-header-shadow);
    border-radius: 0.15rem;
    z-index: 10;
}

.header .header__menu-button {
    border: 0;
    background-color: inherit;
    margin-inline-end: 0.5rem;
    padding-inline: 0.4rem;
}

.header .header__menu-button:hover {
    background-color: var(--clr-header-bk-hover);
}
</style>
