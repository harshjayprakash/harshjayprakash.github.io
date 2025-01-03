<template>
    <HeaderComponent />
    <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';

export default defineComponent({
    name: 'MainComponent',
    components: { RouterView, HeaderComponent },
});
</script>

<style lang="css" scoped>

</style>
