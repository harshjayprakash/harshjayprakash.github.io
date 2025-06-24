<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ inheritAttrs: false });

const { orientation, thickness = 0.1, height = 0 } = defineProps<{
    orientation: 'horizontal' | 'vertical',
    thickness?: number,
    height?: number
}>();

const style = computed(() => {
    return {
        '--widget-divider-computed-height': `${height}rem`,
        '--widget-divider-computed-thickness': `${thickness}rem`,
    }
});
</script>

<template>
    <hr class="divider" :aria-orientation="orientation" :style />
</template>

<style lang="css" scoped>
.divider {
    --widget-divider-outline: var(--colour-outline-faded);

    border: 0;
    border-radius: 5px;
}

.divider[aria-orientation="horizontal"] {
    border-block-end:
        var(--widget-divider-computed-thickness)
        solid var(--widget-divider-outline);
}

.divider[aria-orientation="vertical"] {
    height: var(--widget-divider-computed-height);
    border-inline-end:
        var(--widget-divider-computed-thickness)
        solid var(--widget-divider-outline);
}
</style>
