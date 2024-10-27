<template>
    <nav class="nav">
        <router-link 
            class="link-label" 
            active-class="link-label--active" 
            to="/home" exact
            @click="onRouterLinkClick"
        >
            Home
        </router-link>
        <router-link 
            class="link-label" 
            active-class="link-label--active" 
            to="/about" exact
            @click="onRouterLinkClick"
        >
            About
        </router-link>
        <router-link 
            class="link-label" 
            active-class="link-label--active" 
            to="/portfolio/dev" exact
            @click="onRouterLinkClick"
        >
            Developer Portfolio
        </router-link>
    </nav>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType, type Ref } from 'vue';

export default defineComponent({
    emits: ['linkClick'],
    setup(props, { emit }) {
        const hideNav = () => {
            emit('linkClick', false);
        };

        return { hideNav };
    },
    methods: {
        onRouterLinkClick(_event: MouseEvent) {
            this.hideNav();
        }
    }
});
</script>

<style lang="css" scoped>
.nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.nav > .link-label {
    text-decoration: none;
    color: inherit;
}

.nav > .link-label--active {
    font-weight: 500;
}

@media (max-width: 799px) {
    .nav {
        flex-direction: column;
        padding: 1rem 2rem;
    }

    .nav > .link-label {
        padding: 0rem 1rem;
        border-left: 2px solid var(--clr-surface);
    }

    .nav > .link-label--active {
        border-left: 2px solid var(--clr-on-surface);
    }
}

@media (min-width: 800px) {
    .nav > .link-label {
        border-bottom: 2px solid var(--clr-surface);
    }

    .nav > .link-label--active {
        border-bottom: 2px solid var(--clr-on-surface);
    }
}
</style>