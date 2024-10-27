<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import Navigation from './Navigation.vue';

export default defineComponent({
    components: { Navigation },
    setup() {
        const desktopMode: Ref<boolean> = ref(window.innerWidth > 800);
        const showNavigation: Ref<boolean> = ref(desktopMode.value);

        window.addEventListener('resize', (): void => {
            desktopMode.value = (window.innerWidth > 800);
        });

        return { desktopMode, showNavigation };
    },
    methods: {
        onMenuButtonClick(_event: MouseEvent) {
            this.showNavigation = !this.showNavigation;
        },
        hideShowNavigation() {
            this.showNavigation = false;
        }
    }
    
});
</script>

<template>
    <header class="header">
        <button 
            class="menu-button" @click="onMenuButtonClick" 
            v-if="!desktopMode"
        >
            &#x2630;
        </button>
        <span class="title">Harsh.</span>
        <span class="spacer"></span>
        <Navigation v-if="desktopMode" @linkClick="hideShowNavigation" />
    </header>
    <Navigation v-if="!desktopMode && showNavigation" @linkClick="hideShowNavigation" />
</template>

<style lang="css" scoped>
.header {
    padding: 1rem;
    display: flex;
}

.header > * {
    margin-right: 0.5rem;
}

.header > .menu-button {
    border: 0;
    background-color: inherit;
}

.header > .spacer {
    flex-grow: 1;
}
</style>