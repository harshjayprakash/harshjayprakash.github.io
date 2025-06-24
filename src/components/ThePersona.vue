<script lang="ts" setup>
defineOptions({ inheritAttrs: false });

const { avatar, name, status } = defineProps<{
    avatar: string,
    name: string,
    status: string
}>();

const generateAriaLabel = () => {
    return `${name}, status: ${status}`;
}
</script>

<template>
    <div
        class="persona"
        role="status"
        v-bind="$attrs"
        v-on="$attrs"
        :aria-label="generateAriaLabel()"
    >
        <img :src="avatar" alt="avatar" class="avatar" />
        <div class="indicator" aria-hidden="true"></div>
        <div aria-label="Avatar Information" class="text" role="group">
            <span class="name">{{ name }}</span>
            <span class="status">{{ status }}</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
.persona {
    display: flex;
    gap: 0.10rem;
}

.persona .avatar {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}

.persona .indicator {
    position: relative;
    top: 1.8rem;
    left: -0.9rem;
    height: 0.75rem;
    width: 0.75rem;
    background: var(--colour-500H);
    border-radius: 50%;
    border: 0.1rem solid var(--colour-bk-primary);
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
