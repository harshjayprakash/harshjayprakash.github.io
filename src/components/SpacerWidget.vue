<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    spacing: number,
    orientation: 'horizontal' | 'vertical'
}>();

const klass = computed(() => {
    return {
        'spacer--horizontal': props.orientation === 'horizontal',
        'spacer--vertical': props.orientation === 'vertical'
    }
});

const style = computed(() => {
    return {
        '--widget-spacer-padding': props.spacing
    }
});
</script>

<template>
    <div class="spacer" :class="klass" :style aria-hidden="true"></div>
</template>

<style lang="css" scoped>
.spacer {
    --widget-spacer-vspace: 1rem;

    padding-block: var(--widget-spacer-vspace);
}
</style>
