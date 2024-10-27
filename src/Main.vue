<template>
    <!-- <Banner/> -->
    <Header/>
    <main class="content-container">
        <RouterView/>
    </main>
    <Footer/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
</script>

<style scoped>
.content-container {
    padding: 1rem;
}
</style>