<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    variant?: 'horizontal' | 'vertical',
    vheight?: string,
    thickness?: string
    spacing?: string
}>();

const safeVariant = computed(() => props.variant ?? 'horizontal');
const safeVerticalHeight = computed(() => props.vheight ?? 'auto');
const safeThickness = computed(() => props.thickness ?? '0.1rem');
const safeSpacing = computed(() => props.spacing ?? '1rem');

const defineStyles = computed(() => {
    return {
        '--widget-divider-computed-thickness': safeThickness.value,
        '--widget-divider-computed-vheight': safeVerticalHeight.value,
        '--widget-divider-computed-spacing': safeSpacing.value
    }
});
</script>

<template>
    <hr class="divider" :class="{
            'v-divider' : safeVariant === 'vertical',
            'h-divider' : safeVariant === 'horizontal',
        }" :aria-orientation="safeVariant" :style="defineStyles"
    />
</template>

<style lang="css" scoped>
.divider {
    --widget-divider-border: var(--colour-border-faded);

    border: 0;
}

.h-divider {
    border-block-end:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
    margin-block: var(--widget-divider-computed-spacing);
}

.v-divider {
    block-size: var(--widget-divider-computed-vheight);
    border-inline:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
    margin-inline: var(--widget-divider-computed-spacing);
}
</style>
