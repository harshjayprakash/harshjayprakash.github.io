import { onMounted, readonly, ref } from 'vue';

import type { BoxEntity } from '@/types/graphic/BoxEntity';

const useDotParticles = (dotCount: number) => {
    const dots = ref<BoxEntity[]>([]);
    const highlightDotIndex = ref(0);

    const DOT_UPPER_BOUND = 100;
    const DOT_SCALING = 20;

    const generatePosition_ = (endBound: number, scale: number) => {
        return (Math.floor(Math.random()*endBound) / scale) * scale;
    }

    onMounted(() => {
        highlightDotIndex.value = Math.floor(Math.random()*dotCount);

        for (let idx = 0; idx < dotCount; idx++) {
            const x = generatePosition_(DOT_UPPER_BOUND, DOT_SCALING);
            const y = generatePosition_(DOT_UPPER_BOUND, DOT_SCALING);

            dots.value.push({
                positionX: x,
                positionY: y,
                unique: (highlightDotIndex.value === idx)
            });
        }

    });

    const isHighlightDot = (idx: number) => {
        return (idx == highlightDotIndex.value)
    }

    return {
        dots: readonly(dots),
        isHighlightDot
    };
}

export default useDotParticles;
