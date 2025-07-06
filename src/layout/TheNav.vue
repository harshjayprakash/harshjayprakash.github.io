<script setup lang="ts">
import { useRouter, RouterLink, type RouteRecordRaw } from 'vue-router';
import TheIcon from '@/components/TheIcon.vue'
import type { NavProps } from '@/types/ui/NavProps';

const props = withDefaults(defineProps<NavProps>(), {
    variant: 'desktop'
});

const isDesktop = () => props.variant === 'desktop';

const { getRoutes, currentRoute } = useRouter();
const routes = getRoutes().filter(route => route.meta.icon != undefined);

const ariaCurrent = (path: string) => {
    return (currentRoute.value.path === path) ? 'page' : 'false'
};
const isCurrentPage = (path: string) => ariaCurrent(path) == 'page';

const getIcon = (route: RouteRecordRaw) => `${route.meta?.icon}`;
</script>

<template>
    <nav class="nav" :data-variant="props.variant">
        <ul class="nav-list" aria-label="Navigation Link List">
            <li class="nav-item" v-for="route in routes" :key="route.path">
                <RouterLink class="nav-link" :to="route.path"
                    :aria-current="ariaCurrent(route.path)"
                    :aria-label="route.meta?.title"
                >
                    <TheIcon :name="getIcon(route)" :filled="isCurrentPage(route.path)" />
                    <span v-if="isDesktop()">{{ route.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="css">
.nav[data-variant='mobile'] {
    background-color: var(--colour-bk-secondary);
    border: 1px solid var(--colour-outline-faded);
    padding: 0.5rem;
    border-radius: var(--rounded-default);
    box-shadow: var(--shadow-lg);
}

.nav[data-variant='mobile'] .nav-item {
    padding-inline: 0.5rem;
    padding-block: 0.15rem;
}

.nav .nav-list {
    list-style: none;
    padding: 0;
    display: flex;
}

.nav .nav-list {
    display: flex;
    flex-direction: row;
    padding: 0 0.5rem;
    gap: 1rem;
}

.nav .nav-item {
    position: relative;
}

.nav .nav-link {
    display: flex;
    flex-direction: row;
    place-content: center;
    place-items: center;
    text-decoration: none;
    gap: 0.15rem;
    color: var(--colour-text-primary);
    padding-block: 0.15rem;
}

.nav .nav-link::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.4rem;
    height: 0.25rem;
    background-color: transparent;
    border-radius: var(--rounded-default);
    bottom: -0.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.nav .nav-link:hover::after {
    background-color: var(--colour-bk-hover-stronger);
}

.nav .nav-link[aria-current='page']::after {
    background-color: var(--colour-bk-highlight);
}

.nav .nav-link[aria-current='page']:hover::after {
    width: 100%;
}
</style>
