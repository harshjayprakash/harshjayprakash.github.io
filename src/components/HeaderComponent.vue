<script lang="ts">
import { defineComponent } from 'vue';
import NavComponent from './NavComponent.vue';

const HeaderComponent = defineComponent({
    name: 'HeaderComponent',
    components: { NavComponent },
});

export default HeaderComponent;
</script>

<template>
    <header class="header">
        <span class="title">Harsh.</span>
        <hr class="vbar" aria-hidden="true" />
        <NavComponent />
    </header>
</template>

<style lang="css" scoped>
.header {
    background-color: var(--clr-surface-object);
    position: sticky;
    top: 0;
    padding-block: 1rem;
    display: flex;
}

.header .vbar {
    border: 0;
    border-inline-end: 0.1rem solid var(--clr-on-surface-neutral);
    margin-inline: 1rem;
    opacity: 0.4;
}
</style>
