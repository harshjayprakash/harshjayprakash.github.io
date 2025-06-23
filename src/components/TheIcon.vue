<script setup lang="ts">
import { defineProps } from 'vue';

const { name } = defineProps<{
    name: string
}>();
</script>

<template>
    <span class="material-symbols-outlined icon-outline">
        {{ name }}
    </span>
</template>

<style lang="css" scoped>
.icon-outline {
    font-variation-settings:
        "FILL" 1,
        "wght" 400,
        "GRAD" 0,
        "opsz" 22;
}
</style>
