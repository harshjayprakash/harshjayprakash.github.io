<script lang="ts">
import { defineComponent } from 'vue';

const BadgeComponent = defineComponent({
    name: 'BadgeComponent',
});

export default BadgeComponent;
</script>

<template>
    <span class="badge">
        <slot></slot>
    </span>
</template>

<style lang="css" scoped>
</style>
