import { onMounted, onUnmounted, readonly, ref } from "vue";

const useWindowSize = () => {
    const width = ref(window.innerWidth);
    const height = ref(window.innerHeight);

    const _updateSizes = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    onMounted(() => {
        window.addEventListener('resize', _updateSizes);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', _updateSizes);
    });

    return { width: readonly(width), height: readonly(height) };
}

export default useWindowSize;
