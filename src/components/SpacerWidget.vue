<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    spacing: number,
    orientation: 'horizontal' | 'vertical'
}>();

const safeSpace = computed(() => props.space ?? '1rem');

const defineStyles = computed(() => {
    return {
        '--widget-spacer-vspace': safeSpace.value
    }
});
</script>

<template>
    <div class="spacer" aria-hidden="true" :style="defineStyles"></div>
</template>

<style lang="css" scoped>
.spacer {
    --widget-spacer-vspace: 1rem;

    padding-block: var(--widget-spacer-vspace);
}
</style>
