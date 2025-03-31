<script setup lang="ts">
const props = defineProps<{
    name: string,
    status: string,
    imageUri: string,
    indicator: 'available' | 'not-available'
}>();
</script>

<template>
    <article class="persona">
        <img
            aria-label="Profile Picture"
            class="image"
            v-bind:src="props.imageUri"
            alt="persona photo"  />
        <div role="status" aria-label="Status Indicator" class="indicator" ></div>
        <section class="information">
            <span class="name">{{ props.name }}</span>
            <span class="status">
                <slot>Unknown</slot>
            </span>
        </section>
    </article>
</template>

<style lang="css" scoped>
.persona {
    --widget-persona-bk: var(--clr-surface-primary);

    display: flex;
    place-items: center;
}

.persona .image {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}

.persona .indicator {
    position: relative;
    height: 0.75rem;
    width: 0.75rem;
    background-color: oklch(0.765 0.177 163.223);
    border-radius: 50%;
    border: 0.1rem solid var(--widget-persona-bk);
    top: 0.9rem;
    right: 0.6rem;
}

.persona .information {
    display: flex;
    flex-direction: column;
}

.persona .status {
    opacity: 0.7;
    font-size: small;
}
</style>
