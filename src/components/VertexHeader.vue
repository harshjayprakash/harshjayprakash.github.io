<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
import VertexNavigation from './VertexNavigation.vue';

export default defineComponent({
    name: 'VertexHeader',
    components: { VertexNavigation, },
    setup() {
        const showVersionTag: Boolean = true;
        return { showVersionTag };
    },
    data() {
        const isDesktop: Ref<Boolean> = ref(window.innerWidth > 800);
        const showNavigation: Ref<Boolean> = ref(false);

        window.addEventListener('resize', (): void => {
            isDesktop.value = (window.innerWidth > 800);
        });

        return { isDesktop, showNavigation };
    },
    methods: {

    }
});
</script>

<template>
    <header class="vertex-header">
        <button v-if="!isDesktop" class="menu-button" v-on:click="showNavigation = !showNavigation">
            &#x2630;
        </button>
        <span class="title">Harsh.</span>
        <div class="spacer"></div>
        <VertexNavigation v-if="isDesktop" />
    </header>
    <VertexNavigation v-if="!isDesktop && showNavigation" />
</template>

<style lang="css" scoped>
.vertex-header {
    display: flex;
    place-items: center;
    position: sticky;
    top: 0;
}

.vertex-header .menu-button,
.vertex-header .title {
    padding-block: 0.75rem;
}

.vertex-header .menu-button {
    padding-inline: 1rem;
    background-color: inherit;
    border: 0;
}

.vertex-header .menu-button:hover {
    background-color: var(--clr-surface-v);
}

.vertex-header .spacer {
    flex-grow: 1;
}
</style>
