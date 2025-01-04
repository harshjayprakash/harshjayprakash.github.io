<template>
    <nav class="navigation">
        <RouterLink
            class="nav-link"
            active-class="nav-link--active"
            v-for="link in linksToShow"
            :key="link.path"
            :to="link.path"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { RouterLink, type RouteRecordNormalized, type RouteRecordRaw } from 'vue-router';

export default defineComponent({
    name: 'NavigationComponent',
    components: { RouterLink },
    data() {
        const linkFilter: String[] = ['/home'];
        const linksToShow: RouteRecordRaw[] = router.getRoutes()
            .filter((route: RouteRecordNormalized) =>
                linkFilter.includes(route.path))
            .sort((linkA: RouteRecordNormalized, linkB: RouteRecordNormalized) =>
                linkFilter.indexOf(linkA.path) - linkFilter.indexOf(linkB.path));
        return { linksToShow };
    }
});
</script>

<style lang="css" scoped>

</style>
