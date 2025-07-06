import { onMounted, readonly, ref } from 'vue';

import type { BoxEntity } from '@/types/graphic/BoxEntity';

const useDotParticles = (dotCount: number) => {
    const dots = ref<BoxEntity[]>([]);
    const highlightDotIndex = ref(0);

    onMounted(() => {
        highlightDotIndex.value = Math.floor(Math.random()*dotCount);

        for (let idx = 0; idx < dotCount; idx++) {
            const x = Math.floor(Math.random()*120);
            const y = Math.floor(Math.random()*120);
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
