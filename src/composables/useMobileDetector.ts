import { computed, readonly, ref } from "vue";
import { useWindowSize } from "@vueuse/core"

const useMobileDetector = (mobileBreakpoint: number) => {
    const { width } = useWindowSize();
    const _mobileBreakpoint = ref(mobileBreakpoint);
    const isMobile = computed(() => width.value < _mobileBreakpoint.value);

    return { isMobile: readonly(isMobile) };
}

export default useMobileDetector;
