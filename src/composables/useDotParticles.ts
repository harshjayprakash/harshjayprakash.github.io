import { onMounted, readonly, ref } from 'vue';

import type { Position } from '@/types/Position';

const useDotParticles = (dotCount: number) => {
    const dots = ref<Position[]>([]);
    const highlightDotIndex = ref(0);

    onMounted(() => {
        for (let idx = 0; idx < dotCount; idx++) {
            const x = Math.floor(Math.random()*120);
            const y = Math.floor(Math.random()*120);
            dots.value.push({ x, y });
        }

        highlightDotIndex.value = Math.floor(Math.random()*dotCount);
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
