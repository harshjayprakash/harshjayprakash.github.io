<template>
    <span class="hx-badge">
        <span class="hx-badge__text">
            <slot></slot>
        </span>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BadgeComponent',
    setup() { },
});
</script>

<style lang="css" scoped>
.hx-badge {
    display: flex;
    place-items: center;
    place-content: center;
}

.hx-badge .hx-badge__text {
    background-color: var(--clr-accent-container);
    color: var(--clr-on-accent-container);
    font-size: 0.825rem;
    padding: 0.125rem 0.625rem;
    height: min-content;
}
</style>