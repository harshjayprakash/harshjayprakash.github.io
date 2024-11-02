<template>
    <header class="header">
        <button 
            class="header__menu-button" @click="onMenuButtonClick" 
            v-if="!isDesktop"
        >
            &#x2630;
        </button>
        <span class="header__title">Harsh.</span>
        <span class="header__version-tag" v-if="showVersionTag">{{ versionStatus }}</span>
        <span class="header__spacer"></span>
        <Navigation v-if="isDesktop" @linkClick="hideNavigation" />
    </header>
    <Navigation v-if="!isDesktop && displayNavigation" @linkClick="hideNavigation" />
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import Navigation from './Navigation.vue';

export default defineComponent({
    components: { Navigation },
    data() {
        const versionStatus: string = 'Preview';
        return { versionStatus };
    },
    setup() { 
        const showVersionTag: Boolean = true;
        const isDesktop: Ref<boolean> = ref(window.innerWidth > 800);
        const displayNavigation: Ref<boolean> = ref(isDesktop.value);
        window.addEventListener('resize', (): void => {
            isDesktop.value = (window.innerWidth > 800);
        });
        return { showVersionTag, isDesktop, displayNavigation };
    },
    methods: {
        onMenuButtonClick() {
            this.displayNavigation = !this.displayNavigation;
        },
        hideNavigation() {
            this.displayNavigation = false;
        },
    },
});
</script>

<style lang="css" scoped>
.header {
    padding: 1rem;
    display: flex;
}

.header > * {
    margin-right: 0.5rem;
}

.header .header__menu-button {
    border: 0;
    background-color: inherit;
}

.header .header__menu-button:hover {
    background-color: var(--clr-surface-container-high);
}

.header .header__spacer {
    flex-grow: 1;
}

.header .header__version-tag {
    padding: 0 0.5rem;
    border: 0.1rem solid var(--clr-on-surface);
    text-transform: uppercase;
}
</style>