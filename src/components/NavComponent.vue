<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';

const NavComponent = defineComponent({
    name: 'NavComponent',
    components: { RouterLink },
    setup() {
        const linkFilter = ['/home', '/about'];
        const links = router.getRoutes()
            .filter(link => linkFilter.includes(link.path))
            .sort((linkA, linkB) =>
                linkFilter.indexOf(linkA.path) - linkFilter.indexOf(linkB.path)
            );

        return {
            navLinks: links as RouteRecordRaw[],
        };
    }
});

export default NavComponent;
</script>

<template>
    <nav class="nav">
        <RouterLink
            class="nav-link" v-for="(link, idx) in navLinks"
            active-class="nav-link--active" exact
            :key="idx" :to="link.path"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css" scoped>

.nav {
    display: flex;
    gap: 1rem;
}

.nav .nav-link {
    color: inherit;
    text-decoration: solid underline 0.2rem var(--clr-surface-neutral);
    text-underline-offset: 0.25rem;
}

.nav .nav-link:hover {
    text-decoration-color: var(--clr-on-surface-hover);
}


.nav .nav-link--active {
    font-weight: 500;
    text-decoration-color: var(--clr-accent);
}
</style>
