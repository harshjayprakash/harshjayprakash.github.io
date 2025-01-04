<template>
    <header class="header">
        <span class="title">H.</span>
        <div class="separator"></div>
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
.header {
    display: flex;
}

.header .separator {
    flex-grow: 1;
}
</style>
