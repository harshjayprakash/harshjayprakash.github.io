import { computed, onMounted, onUnmounted, ref } from 'vue';

const useMobileDetector = () => {
    const windowWidth = ref(window.innerWidth);
    const isMobile = computed(() => windowWidth.value < 768);

    const _updateDeviceWidth = () => {
        windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', _updateDeviceWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', _updateDeviceWidth);
    });

    return { isMobile, windowWidth };
}

export default useMobileDetector;
