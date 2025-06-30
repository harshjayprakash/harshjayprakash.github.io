import type { Ref } from "vue";

export interface TabListProps {
    selectedIndex: string;
    registeredTabs: Ref<HTMLButtonElement[]>;

}
