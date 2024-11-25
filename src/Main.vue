<template>
    <Header />
    <main class="content-container">
        <RouterView />
    </main>
    <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/shared/Header.vue';
import BadgeComponent from './components/ui/BadgeComponent.vue';
import Footer from './components/shared/Footer.vue';

export default defineComponent({
    name: 'Main',
    components: { Header, BadgeComponent, Footer },
    setup() { },
});
</script>

<style scoped>
.content-container {
    padding: 1rem;
    max-width: var(--m-width);
    margin: auto;
}
</style>