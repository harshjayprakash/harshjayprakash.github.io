<template>
    <div class="container">
        <HeaderComponent />
        <RouterView />
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
    name: 'MainComponent',
    components: { RouterView, HeaderComponent, FooterComponent },
});
</script>

<style lang="css" scoped>
.container {
    max-width: 64rem;
    margin: auto;
    padding: 0 2rem;
}
</style>
