import { inject, provide, ref } from "vue"

import { TAB_CONTEXT_KEY, type TabContext } from "@/types/ui/TabContext";

export const useProvideTabs = () => {
    const selectedIndex = ref(0);
    const focusedIndex = ref(0);
    const tabReferences = ref<HTMLElement[]>([]);

    const selectTab = (index: number) => {
        selectedIndex.value = index;
        focusedIndex.value = index;
    }

    const registerTab = (element: HTMLElement, index: number) => {
        tabReferences.value[index] = element;
    }

    const handleKeydown = (event: KeyboardEvent) => {
        const total = tabReferences.value.length;

        if (['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
            event.preventDefault();
        }

        switch (event.key) {
            case 'ArrowRight':
                focusedIndex.value = (focusedIndex.value + 1) % total;
                break;

            case 'ArrowLeft':
                focusedIndex.value = (focusedIndex.value - 1) % total;
                break;

            case 'Home':
                focusedIndex.value = 0;
                break;

            case 'End':
                focusedIndex.value = total - 1;
                break;

            case 'Enter':
            case '':
                selectTab(focusedIndex.value);
                break;
        }

        selectTab(focusedIndex.value);
        tabReferences.value[focusedIndex.value]?.focus();
        tabReferences.value[focusedIndex.value]?.click();
    }

    const context: TabContext = { selectedIndex, focusedIndex, selectTab, registerTab };

    provide(TAB_CONTEXT_KEY, context);

    return { selectedIndex, focusedIndex, handleKeydown };
}

export const useTabs = (): TabContext => {
    const context = inject<TabContext>(TAB_CONTEXT_KEY);

    if (!context) {
        throw new Error('useTabs must be used within a TabList');
    }

    return context;
}
