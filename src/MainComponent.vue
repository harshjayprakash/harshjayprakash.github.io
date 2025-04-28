<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheLink from './components/TheLink.vue';
</script>

<template>
    <TheLink variant="external" to="#main" :new-window="false" exact>
        Skip to main content
    </TheLink>
    <TheHeader />
    <main id="main">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style lang="css" scoped>
#main {
    padding-block: 2.5rem;
}
</style>
