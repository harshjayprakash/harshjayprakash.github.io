<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VertexProvider',
});
</script>

<template>
    <div class="vertex-provider">
        <slot />
    </div>
</template>

<style lang="css" scoped>
.vertex-provider {
    max-width: 87.5rem;
    margin-inline: auto;
    padding-inline: 2rem;
}
</style>
