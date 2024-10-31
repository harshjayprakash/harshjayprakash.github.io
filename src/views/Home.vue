<template>
    <div class="home-container">
        <section class="hero">
            <h1>Harsh Jayprakash.</h1>
            <p>part programmer, part artist.</p>
        </section>
        <section class="portfolio-links">
            <div class="topic-list">
                <article>
                    
                </article>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const services: { name: string, text: string, icon: string }[] = [];

        return { services };
    }
});
</script>

<style lang="css" scoped>

</style>