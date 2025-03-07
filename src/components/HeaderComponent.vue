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
    top: 1rem;
    display: flex;
    width: fit-content;
    padding-block: 0.75rem;
    padding-inline: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 0.15rem;
    z-index: 10;
    border: 1px solid rgb(0 0 0 /0.2);
}

.header .vbar {
    border: 0;
    border-inline-end: 0.1rem solid var(--clr-on-surface-neutral);
    margin-inline: 1rem;
    opacity: 0.4;
}
</style>
