<script lang="ts">
import { defineComponent } from 'vue';

const BadgeComponent = defineComponent({
    name: 'BadgeComponent',
    inheritAttrs: false,
    props: {
        variant: {
            type: String,
            default: 'filled',
            validator(value: String) {
                return ['filled', 'ghost', 'outline', 'tint'].includes(value.toString());
            }
        }
    }
});

export default BadgeComponent;
</script>

<template>
    <small
        v-bind="$attrs" v-on="$attrs" class="badge"
        v-bind:class="{
            'badge--filled': $props.variant === 'filled',
            'badge--ghost': $props.variant === 'ghost',
            'badge--outline': $props.variant === 'outline',
            'badge--tint': $props.variant === 'tint',
        }"
    >
        <slot></slot>
    </small>
</template>

<style lang="css" scoped>
.badge,
.badge--outline {
    border-radius: var(--bdr-default);
    border: 1px solid var(--clr-badge-outline);
    padding-inline: 0.3rem;
}

.badge--filled {
    background-color: var(--clr-surface-tertiary);
    color: var(--clr-text-inverted);
    border-color: var(--clr-surface-tertiary);
}

.badge--ghost {
    background-color: inherit;
    border-color: transparent;
}

.badge--tint {
    background-color: var(--clr-surface-glow);
    border-color: var(--clr-outline-active);
}
</style>
