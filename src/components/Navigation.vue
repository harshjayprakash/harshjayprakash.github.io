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
    data() {
        const links: string[] = ['/home', '/about', '/portfolio/dev'];
        const linksToShow: RouteRecordRaw[] = router.getRoutes()
            .filter(route => links.includes(route.path))
            .sort((a, b) => links.indexOf(a.path) - links.indexOf(b.path));
        return { linksToShow };
    },
    emits: ['linkClick'],
    setup(_props, { emit }) {
        const hideNav = () => {
            emit('linkClick', false);
        };
        return { hideNav };
    },
    methods: {
        onLinkClick() {
            this.hideNav();
        },
    },
});
</script>

<style lang="css" scoped>
.navigation {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.navigation .navigation__link {
    text-decoration: none;
    color: inherit;
}

.navigation .navigation__link--active {
    font-weight: 500;
}

@media (max-width: 799px) {
    .navigation {
        flex-direction: column;
        padding: 1rem 2rem;
    }

    .navigation .navigation__link {
        padding: 0 1rem;
        border-left: 0.15rem solid var(--clr-surface);
    }

    .navigation .navigation__link--active {
        border-left-color: var(--clr-on-surface);
    }
}

@media (min-width: 800px) {
    .navigation .navigation__link {
        border-bottom: 0.15rem solid var(--clr-surface);
    }

    .navigation .navigation__link--active {
        border-bottom-color: var(--clr-on-surface);
    }
}
</style>
