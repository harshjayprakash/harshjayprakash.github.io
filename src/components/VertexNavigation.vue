<script lang="ts">
import { defineComponent } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

import router from '@/router';

export default defineComponent({
    name: 'VertexNavigation',
    data() {
        const linkFilter: String[] = ['/home'];
        const linksInfo: RouteRecordRaw[] = router.getRoutes()
            .filter((route) => linkFilter.includes(route.path))
            .sort((linkA, linkB) =>
                linkFilter.indexOf(linkA.path) - linkFilter.indexOf(linkB.path)
            );
        return { linksInfo };
    }
});
</script>

<template>
    <nav class="vertex-navigation">
        <RouterLink
            class="nav-link"
            active-class="nav-link--active"
            v-for="(link, idx) in linksInfo"
            :to="link.path.toString()"
            :key="idx"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css" scoped>
@media (min-width: 769px) {
    .vertex-navigation {
        display: flex;
        gap: 1rem;
    }

    .vertex-navigation .nav-link {
        text-decoration: none;
        color: inherit;
        margin-inline: 0.25rem;
        padding-block: 0.2rem;
        border-bottom: 0.2rem solid transparent;
    }

    .vertex-navigation .nav-link:hover {
        border-bottom: 0.2rem solid var(--clr-on-surface-v);
    }

    .vertex-navigation .nav-link--active,
    .vertex-navigation .nav-link--active:hover {
        border-bottom: 0.2rem solid var(--clr-accent);
    }
}

@media (max-width: 768px) {
    .vertex-navigation {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }

    .vertex-navigation .nav-link {
        text-decoration: none;
        color: inherit;
        padding-inline: 0.75rem;
        border-left: 0.2rem solid transparent;
    }

    .vertex-navigation .nav-link:hover {
        border-left: 0.2rem solid var(--clr-on-surface-v);
    }

    .vertex-navigation .nav-link--active,
    .vertex-navigation .nav-link--active:hover {
        border-left: 0.2rem solid var(--clr-accent);
    }
}
</style>
