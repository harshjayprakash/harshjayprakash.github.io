<template>
    <header class="header">
        <span class="title">H.</span>
        <small class="status">Under Construction</small>
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
    padding: 1rem 0;
    gap: 1rem;
}

.header .status {
    border: 0.05rem solid var(--clr-on-surface);
    padding: 0 0.25rem;
    place-self: center;
}

.header .separator {
    flex-grow: 1;
}
</style>
