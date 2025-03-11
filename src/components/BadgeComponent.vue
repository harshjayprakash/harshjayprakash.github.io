<script lang="ts">
import { defineComponent } from 'vue';

const BadgeComponent = defineComponent({
    name: 'BadgeComponent',
});

export default BadgeComponent;
</script>

<template>
    <small class="badge">
        <slot></slot>
    </small>
</template>

<style lang="css" scoped>
.badge {
    border-radius: var(--bdr-default);
    padding-inline: 0.3rem;
    border: 1px solid var(--clr-badge-outline);
    margin-inline: 0.5rem;
    vertical-align: super;
}
</style>
