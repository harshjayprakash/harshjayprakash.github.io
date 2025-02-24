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
}

.vertex-provider :slotted(h1),
.vertex-provider :slotted(h2),
.vertex-provider :slotted(h3),
.vertex-provider :slotted(h4),
.vertex-provider :slotted(h5),
.vertex-provider :slotted(h6) {
    font-weight: 400;
}
</style>
