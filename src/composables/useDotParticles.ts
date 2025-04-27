import type { Position } from "@/types/Position"
import { readonly, ref } from "vue"

const useDotParticles = () => {
    const dots = ref<Position[]>([]);

    const generateDots = (dotCount: number) => {
        dots.value.splice(0);
        for (let idx = 0; idx < dotCount; idx++) {
            const x = Math.floor(Math.random()*100);
            const y = Math.floor(Math.random()*100);
            dots.value.push({ x, y });
        }
    }

    return { dots: readonly(dots), generateDots };
}

export default useDotParticles;
