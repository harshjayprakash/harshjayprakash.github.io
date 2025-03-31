<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    desktopCols?: number
}>();

const safeDesktopCols = computed(() => props.desktopCols ?? 2);

const styles = computed(() => {
    return {
        '--widget-card-group-desktop-cols': safeDesktopCols.value
    }
});
</script>

<template>
    <ul class="card-group" :style="styles">
        <slot></slot>
    </ul>
</template>

<style lang="css" scoped>
.card-group {
    display: grid;
    gap: 1rem;
    padding: 0;
}

@media screen and (min-width: 768px) {
    .card-group {
        grid-template-columns: repeat(var(--widget-card-group-desktop-cols), 1fr);
    }
}
</style>
