<script lang="ts" setup>
import { useTabs } from '@/composables/useTabs';
import type { TabProps } from '@/types/ui/TabProps';
import { onMounted, ref } from 'vue';

const props = defineProps<TabProps>();
const element = ref<HTMLElement | null>(null);

const { selectedIndex, focusedIndex, selectTab, registerTab } = useTabs();

const getTabIndex = () => selectedIndex.value === props.index ? 0 : -1;
const getAriaSelected = () => selectedIndex.value === props.index;
const onFocus = () => focusedIndex.value = props.index;

onMounted(() => {
    if (element.value) {
        registerTab(element.value, props.index);
    }
})
</script>

<template>
    <button role="tab" class="tab" ref="element"
        :aria-selected="getAriaSelected()" :tabindex="getTabIndex()"
        @click="selectTab(props.index)"
        @focus="onFocus()"
        >
        <slot></slot>
    </button>
</template>

<style lang="css">
.tab {
    --widget-tab-border-colour: transparent;

    position: relative;
    border: 0;
    background-color: inherit;
    padding: 0;
}

.tab::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background-color: var(--widget-tab-border-colour);
    border-radius: var(--rounded-default);
    bottom: -0.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.tab:hover {
    cursor: pointer;
}

.tab[aria-selected="false"]:hover {
    --widget-tab-border-colour: var(--colour-outline-hover);
}

.tab[aria-selected="true"] {
    --widget-tab-border-colour: var(--colour-outline-highlight);
}
</style>
