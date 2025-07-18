import type { Ref } from "vue";

export interface TabContext {
    selectedIndex: Ref<number>;
    focusedIndex: Ref<number>;
    selectTab: (index: number) => void;
    registerTab: (element: HTMLElement, index: number) => void;
}

export const TAB_CONTEXT_KEY = 'tabContext';
