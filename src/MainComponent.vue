<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
    <TheHeader />
    <main class="content-wrapper">
        <RouterView />
    </main>
    <TheFooter />
</template>

<style lang="css" scoped>
.content-wrapper {
    padding-block: 3rem 2rem;
}
</style>
