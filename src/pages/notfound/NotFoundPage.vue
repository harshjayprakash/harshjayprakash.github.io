<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
</script>

<template>
    <article aria-label="Not Found" class="not-found">
        <div role="group" class="text">
            <h1>Seems you've wondered off the map.</h1>
            <p class="muted-text">
                This page doesn't exist &mdash; or maybe it never did.
            </p>
        </div>
        <div aria-hidden="true" class="unique-dot">

        </div>
        <TheButton linkable="internal" appearance="primary" to="/home">
            Go to Home
        </TheButton>
    </article>
</template>

<style lang="css" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    height: 80vh;
    place-content: center;
    place-items: center;
}

.not-found .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.not-found .unique-dot {
    background-color: inherit;
    height: 0.5rem;
    width: 0.5rem;
    border: 0.15rem solid var(--colour-bk-highlight);
    rotate: z 70deg;
    border-radius: 1px;
}

.not-found .muted-text {
    color: var(--colour-text-faded);
}
</style>
