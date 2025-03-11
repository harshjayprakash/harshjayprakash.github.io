<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, type Ref } from 'vue';

import NavComponent from '@/components/NavComponent.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';

const HeaderComponent = defineComponent({
    name: 'HeaderComponent',
    components: { NavComponent, SpacerComponent },
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
        <hr class="vbar" v-if="isDesktopMode" />
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
    background-color: var(--clr-surface-container-lowest);
    position: sticky;
    top: 1rem;
    display: flex;
    width: fit-content;
    padding-block: 0.75rem;
    padding-inline: 1rem;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
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
    background-color: grey;
}

.header .vbar {
    border: 0;
    border-inline-end: 0.1rem solid var(--clr-on-surface-neutral);
    margin-inline: 1rem;
    opacity: 0.4;
}
</style>
