<template>
    <hr class="hx-separator" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SeparatorComponent',
    setup() { },
});
</script>

<style lang="css" scoped>
.hx-separator {
    border: 0;
    border-bottom: 0.0625rem solid var(--clr-outline-variant);
}
</style>