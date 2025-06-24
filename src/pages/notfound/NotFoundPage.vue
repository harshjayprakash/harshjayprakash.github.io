<script setup lang="ts">
import TheButton from '@/components/TheButton.vue';
</script>

<template>
    <article aria-label="Not Found" class="not-found">
        <h1>Seems you've wondered off the map.</h1>
        <TheButton variant="internal" appearance="primary" to="/home" exact>
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
</style>
