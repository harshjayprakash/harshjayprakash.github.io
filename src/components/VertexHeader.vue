<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
    name: 'VertexHeader',
    setup() {
        const showVersionTag: Boolean = true;
        return { showVersionTag };
    },
    data() {
        const isDesktop: Ref<Boolean> = ref(window.innerWidth > 800);

        window.addEventListener('resize', (): void => {
            isDesktop.value = (window.innerWidth > 800);
        });

        return { isDesktop };
    }
});
</script>

<template>
    <header class="vertex-header">
        <button v-if="!isDesktop" class="menu-button">&#x2630;</button>
        <span class="title">Harsh.</span>
    </header>
</template>

<style lang="css" scoped>
.vertex-header {
    display: flex;
    place-items: center;
    position: sticky;
    top: 0;
}

.vertex-header .menu-button {
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
