<template>
    <div class="header-container">
        <header class="header">
            <button 
                class="header__menu-button"
                v-if="!isDesktop"
                @click="onMenuButtonClick"
            >
                &#x2630;
            </button>
            <OctogonComponent />
            <span class="header__title">Harsh.</span>
            <BadgeComponent v-if="showVersionBadge">
                {{ versionStatus }}
            </BadgeComponent>
            <div class="header__spacer"></div>
            <Navigation v-if="isDesktop" />
        </header>
        <Navigation v-if="!isDesktop && displayNavigation" @link-click="hideNavigation" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import BadgeComponent from '../ui/BadgeComponent.vue';
import OctogonComponent from '../ui/OctogonComponent.vue';
import Navigation from './Navigation.vue';

export default defineComponent({
    name: 'Header',
    components: { BadgeComponent, OctogonComponent, Navigation },
    data() {
        const versionStatus: String = 'Under Construction';
        return { versionStatus };
    },
    setup() { 
        const showVersionBadge: Boolean = true;
        const isDesktop: Ref<Boolean> = ref(window.innerWidth > 768);
        const displayNavigation: Ref<Boolean> = ref(false);
        window.addEventListener('resize', (): void => {
            isDesktop.value = (window.innerWidth > 768);
        });
        return { showVersionBadge, isDesktop, displayNavigation };
    },
    methods: {
        onMenuButtonClick() {
            this.displayNavigation = !this.displayNavigation;
        },
        hideNavigation() {
            this.displayNavigation = false;
        }
    }
});
</script>

<style lang="css" scoped>
.header-container {
    background-color: var(--clr-surface-bright);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

.header {
    max-width: var(--m-width);
    margin: auto;
    display: flex;
    place-items: center;
}

.header > * {
    padding: 0.75rem 0.9rem;
}

.header .header__menu-button {
    border: 0;
    background-color: inherit;
}

.header .header__menu-button:hover {
    background-color: var(--clr-surface-dim);
}

.header .header__spacer {
    flex-grow: 1;
}
</style>