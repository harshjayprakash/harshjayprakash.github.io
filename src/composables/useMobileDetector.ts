import { computed, readonly, ref } from 'vue';

import useWindowSize from '@/composables/useWindowSize';

const useMobileDetector = () => {
    const { width } = useWindowSize();
    const _mobileBreakpoint = ref(40*16);
    const isMobile = computed(() => width.value < _mobileBreakpoint.value);

    return { isMobile: readonly(isMobile) };
}

export default useMobileDetector;
