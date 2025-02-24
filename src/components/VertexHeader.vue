<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VertexHeader',
});
</script>

<template>
    <header class="vertex-header">
        <button class="menu-button">&#x2630;</button>
        <span class="title">Harsh.</span>
    </header>
</template>

<style lang="css" scoped>
.vertex-header {
    display: flex;
    place-items: center;
}

.vertex-header .menu-button,
.vertex-header .title {
    padding: 0.8rem 1rem;
}

.vertex-header .menu-button {
    background-color: inherit;
    border: 0;
}

.vertex-header .menu-button:hover {
    background-color: blue;
}

</style>
