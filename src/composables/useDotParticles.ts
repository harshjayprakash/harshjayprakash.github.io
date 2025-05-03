import { onMounted, readonly, ref } from 'vue';

import type { Position } from '@/types/Position';

const useDotParticles = (dotCount: number) => {
    const dots = ref<Position[]>([]);

    onMounted(() => {
        for (let idx = 0; idx < dotCount; idx++) {
            const x = Math.floor(Math.random()*100);
            const y = Math.floor(Math.random()*100);
            dots.value.push({ x, y });
        }
    });

    return { dots: readonly(dots) };
}

export default useDotParticles;
