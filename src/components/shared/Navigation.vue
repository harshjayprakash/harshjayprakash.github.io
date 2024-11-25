<template>
    <nav class="navigation">
        <RouterLink
            v-for="link in linksToShow"
            class="navigation__link"
            active-class="navigation__link--active"
            :to="link.path" exact
            @click="onLinkClick"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export default defineComponent({
    name: 'Navigation',
    data() {
        const links: String[] = ['/home', '/about', '/portfolio/dev'];
        const linksToShow: RouteRecordRaw[] = router.getRoutes()
            .filter(route => links.includes(route.path))
            .sort((a, b) => links.indexOf(a.path) - links.indexOf(b.path));
        return { linksToShow };
    },
    emits: ['linkClick'],
    setup(_props, { emit }) { 
        const hideNavigation = () => {
            emit('linkClick', false);
        };
        return { hideNavigation };
    },
    methods: {
        onLinkClick() {
            this.hideNavigation();
        }
    }
});
</script>

<style lang="css" scoped>
.navigation {
    display: flex;
    gap: 1rem;
}

.navigation .navigation__link {
    text-decoration: none;
    color: var(--clr-on-surface-variant);
}

.navigation .navigation__link:hover {
    background-color: var(--clr-surface-dim);
}

.navigation .navigation__link--active {
    color: var(--clr-on-surface);
    font-weight: 600;
}


@media (min-width: 769px) {
    .navigation .navigation__link {
        padding: 0 0.5rem;
    }
}

@media (max-width: 768px) {
    .navigation {
        background-color: var(--clr-surface-container-highest);
        flex-direction: column;
        padding: 0.45rem 0.625rem;
        gap: 0rem;
    }

    .navigation .navigation__link {
        padding: 0.5rem 0.75rem ;
    }
}
</style>