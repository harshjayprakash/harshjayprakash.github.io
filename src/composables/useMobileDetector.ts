import { computed, onMounted, onUnmounted, ref } from 'vue';

const useMobileDetector = () => {
    const windowWidth = ref(window.innerWidth);
    const isMobile = computed(() => windowWidth.value < 768);

    const updateDeviceWidth = () => {
        windowWidth.value = window.innerWidth;
    };

    onMounted(() => {
        window.addEventListener('resize', updateDeviceWidth);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateDeviceWidth);
    });

    return { isMobile, windowWidth };
}

export default useMobileDetector;
