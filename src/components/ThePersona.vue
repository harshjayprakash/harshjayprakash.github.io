<script lang="ts" setup>
defineOptions({ inheritAttrs: false });

const { avatar, name, status } = defineProps<{
    avatar: string,
    name: string,
    status: string
}>();
</script>

<template>
    <div
        class="persona"
        role="status"
        v-bind="$attrs"
        v-on="$attrs"
    >
        <img :src="avatar" alt="avatar" class="avatar" />
        <div aria-label="Avatar Information" class="text" role="group">
            <span class="name">{{ name }}</span>
            <span class="status">{{ status }}</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
.persona {
    display: flex;
    gap: 1rem;
}

.persona .avatar {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}

.persona .text {
    display: flex;
    flex-direction: column;
}

.persona .text .status {
    font-size: small;
    color: var(--colour-text-faded);
}
</style>
