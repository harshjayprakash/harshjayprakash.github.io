<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter, RouterLink, type RouteRecordRaw } from 'vue-router';

import TheIcon from '@/components/TheIcon.vue'

const { variant } = defineProps<{
    variant: 'desktop' | 'mobile'
}>();

const { getRoutes, currentRoute } = useRouter();
const routes = getRoutes().filter(route => route.meta.icon != undefined);

const getIcon = (route: RouteRecordRaw) => `${route.meta?.icon}`;

const ariaCurrent = (path: string) =>
    (currentRoute.value.path === path) ? 'page' : 'false';
</script>

<template>
    <nav class="nav" :data-variant="variant">
        <ul class="nav-list">
            <li class="nav-item" v-for="route in routes" :key="route.path">
                <RouterLink
                    class="nav-link"
                    :to="route.path" exact
                    :aria-current="ariaCurrent(route.path)"
                >
                    <TheIcon :name="getIcon(route)" :filled="ariaCurrent(route.path) == 'page'" />
                    <span v-if="variant == 'desktop'">{{ route.name }}</span>
                </RouterLink>

            </li>
        </ul>
    </nav>
</template>

<style lang="css" scoped>
.nav[data-variant='mobile'] {
    background-color: var(--colour-bk-secondary);
    border: 1px solid var(--colour-outline-faded);
    padding: 0.5rem;
    border-radius: 5px;
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
    background-color: var(--colour-bk-secondary);
    border-radius: 5px;
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
</style>
