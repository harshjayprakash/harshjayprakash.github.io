<template>
    <header>
        Header
        <NavigationComponent />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavigationComponent from './NavigationComponent.vue';

export default defineComponent({
    name: 'HeaderComponent',
    components: { NavigationComponent },
});
</script>

<style lang="css" scoped>

</style>
