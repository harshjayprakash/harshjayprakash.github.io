<script setup lang="ts">
const props = defineProps<{
    variant: 'image' | 'initials',
    imagePath: string,
}>();
</script>

<template>
    <img
        v-if="props.variant === 'image'"
        :src="props.imagePath"
        alt="profile picture"
        class="avatar"
    />
</template>

<style lang="css" scoped>
.avatar {
    height: 5rem;
    width: 5rem;
}
</style>
