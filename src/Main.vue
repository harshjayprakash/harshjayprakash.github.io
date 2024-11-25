<template>
    <div class="margin-container">
        <Header />
        <main class="content-container">
            <RouterView />
        </main>
        <Footer />
    </div>
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
.margin-container {
    max-width: 56.25rem;
    margin: auto;
}

.content-container {
    padding: 1rem;
}
</style>