<script lang="ts" setup>
import useLinkable from '@/composables/useLinkable';
import type { LinkProps } from '@/types/ui/LinkProps';

const props = withDefaults(defineProps<LinkProps>(), {
    newWindow: false,
});

const config = useLinkable(props.linkable, props.to, props.newWindow);
</script>

<template>
    <component :is="config.is" :href="config.href" :target="config.target"
        :rel="config.rel" :to="config.to" tabindex="0" class="link"
    >
        <slot></slot>
    </component>
</template>

<style lang="css" scoped>
.link {
    color: inherit;
    background-color: inherit;
    text-decoration: underline solid var(--colour-outline-primary) 0.05rem;
    text-underline-offset: 2px;
    cursor: pointer;
}

.link:hover {
    text-decoration-thickness: 0.1rem;
}
</style>
