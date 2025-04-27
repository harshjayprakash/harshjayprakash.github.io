<script lang="ts" setup>
</script>

<template>
    <div role="group">
        <details>
            <summary>
                <slot name="heading"></slot>
            </summary>
            <slot name="content"></slot>
        </details>
    </div>
</template>
