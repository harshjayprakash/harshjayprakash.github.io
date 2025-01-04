<template>
    Navigation
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import type { RouteRecordNormalized, RouteRecordRaw } from 'vue-router';

export default defineComponent({
    name: 'NavigationComponent',
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
