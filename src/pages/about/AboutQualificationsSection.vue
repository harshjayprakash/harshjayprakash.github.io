<script setup lang="ts">
import CardGroupWidget from '@/components/CardGroupWidget.vue';
import CardWidget from '@/components/CardWidget.vue';
</script>

<template>
    <section class="about-quals">
        <h2>Qualifications.</h2>
        <CardGroupWidget :desktop-cols="3">
            <CardWidget>
                <span>Bachelor's Degree</span>
                <span>Computer Science</span>
            </CardWidget>
            <CardWidget>
                <span>A-Levels</span>
                <span>Computer Science, Maths and Fine Art</span>
            </CardWidget>
            <CardWidget>
                <span>GCSEs</span>
                <span>
                    English, Maths, Science, Geography, Spanish, Fine Art and Computer
                    Science
                </span>
            </CardWidget>
        </CardGroupWidget>
    </section>
</template>

<style lang="css" scoped>
</style>
