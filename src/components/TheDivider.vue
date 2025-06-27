<script lang="ts" setup>
import type { DividerProps } from '@/types/ui/DividerProps';
import { computed } from 'vue';

const props = withDefaults(defineProps<DividerProps>(), {
    thickness: 0.1,
    height: 0
});

const style = computed(() => {
    return {
        '--widget-divider-computed-height': `${props.height}rem`,
        '--widget-divider-computed-thickness': `${props.thickness}rem`,
    }
});
</script>

<template>
    <hr class="divider" :aria-orientation="orientation" aria-hidden="true" :style />
</template>

<style lang="css">
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
