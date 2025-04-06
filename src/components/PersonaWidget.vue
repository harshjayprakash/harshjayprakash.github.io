<script setup lang="ts">
const props = defineProps<{
    avatar: string,
    name: string,
    title: string,
    status?: string
}>();
</script>

<template>
    <div role="status" class="persona">
        <img class="avatar" :src="props.avatar" alt="profile picture" />
        <section class="information" aria-label="Person Information">
            <span class="name">{{ props.name }}</span>
            <span class="title">{{ props.title }}</span>
            <span v-if="status != undefined" class="status">{{ props.status }}</span>
        </section>
    </div>
</template>

<style lang="css" scoped>
.persona {
    display: flex;
    gap: 1rem;
}
.avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}

.information {
    display: flex;
    flex-direction: column;
}

.title, .status {
    color: var(--colour-text-faded);
    font-size: small;
}
</style>
