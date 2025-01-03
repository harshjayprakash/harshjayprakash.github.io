<template>
    <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
    name: 'MainComponent',
    components: { RouterView },
});
</script>

<style lang="css" scoped>

</style>
