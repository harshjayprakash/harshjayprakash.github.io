<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';

import BadgeComponent from '@/components/BadgeComponent.vue';
import DividerComponent from '@/components/DividerComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';

const HeaderComponent = defineComponent({
    name: 'HeaderComponent',
    components: {
        NavComponent,
        SpacerComponent,
        DividerComponent,
        BadgeComponent
    },
    setup() {
        const isMobile = inject('isMobile');
        const isNavShown = ref(false);
        const menuButtonText = computed(() =>
            (isNavShown.value) ?
                String.fromCodePoint(10005) : String.fromCodePoint(9776)
        );

        const toggleNavigationVisibility = () => {
            isNavShown.value = !isNavShown.value;
        }

        return { isNavShown, isMobile, menuButtonText, toggleNavigationVisibility };
    }
});

export default HeaderComponent;
</script>

<template>
    <header class="header" aria-label="Site Header, Contains Navigation">
        <button
            v-if="isMobile"
            class="header__menu-button"
            v-on:click="toggleNavigationVisibility"
            aria-label="Mobile Menu Navigation Toggle Button"
        >
            {{ menuButtonText }}
        </button>
        <span class="title">Harsh.</span>
        <BadgeComponent aria-label="Website Status" class="status" variant="outline">
            Under Construction
        </BadgeComponent>
        <DividerComponent v-if="!isMobile" variant="vertical" />
        <NavComponent class="nav" v-if="!isMobile" />
    </header>
    <SpacerComponent space="1rem" />
    <NavComponent
        v-if="isNavShown"
        variant="mobile"
        v-on:onLinkClick="toggleNavigationVisibility"
    />
</template>

<style lang="css" scoped>
.header {
    background-color: var(--clr-header-bk);
    position: sticky;
    top: 1rem;
    display: flex;
    width: fit-content;
    padding-block: 0.8rem;
    padding-inline: 1rem;
    box-shadow:
        0 0.25rem 0.375rem -0.0625rem var(--clr-header-shadow),
        0 0.125rem 0.25rem -0.125rem var(--clr-header-shadow);
    border-radius: var(--bdr-default);
    z-index: 10;
}

.header .title {
    place-self: center;
}

.header .status {
    place-self: center;
    margin-inline-start: 1rem;
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
