<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import TheIcon from './TheIcon.vue'

const { variant } = defineProps<{
    variant: 'desktop' | 'mobile'
}>();

const iconMap: Record<string, string> =  {
    '/home': 'home',
    '/projects': 'extension',
    '/cv': 'description',
    '/about': 'person'
}

const { getRoutes, currentRoute } = useRouter();
const _routeFilter = ['/home', '/projects', '/cv', '/about'];
const routes = getRoutes()
    .filter(route => _routeFilter.includes(route.path))
    .sort((a, b) => _routeFilter.indexOf(a.path) - _routeFilter.indexOf(b.path));

const ariaCurrent = (path: string) => {
    return (currentRoute.value.path === path) ? 'page' : 'false';
}

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
                    <TheIcon :name="iconMap[route.path]" />
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
    width: 1.3rem;
    height: 0.25rem;
    background-color: var(--colour-bk-secondary);
    border-radius: 5px;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.nav .nav-link[aria-current='page']::after {
    background-color: var(--colour-bk-highlight);
}
</style>
