<template>
    <!-- <Banner/> -->
    <div class="margin-container">
        <Header/>
        <main class="content-container">
            <RouterView/>
        </main>
        <Footer/>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Banner from './components/Banner.vue';
</script>

<style scoped>
.margin-container {
    max-width: 64rem;
    margin: auto;
}

.content-container {
    padding: 1rem;
}
</style>