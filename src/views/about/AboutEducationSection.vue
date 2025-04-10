<script lang="ts" setup>
import CardWidget from '@/components/CardWidget.vue';

const quals: {
    level: string,
    quals: string,
    school: string,
}[] = [
    {
        level: 'Bachelors of Science',
        quals: 'Computer Science',
        school: 'University of Winchester'
    },
    {
        level: 'GCE A-Levels',
        quals: 'Maths, Computer Science and Fine Art',
        school: 'Barton Peveril Sixth Form'
    }
]

</script>

<template>
    <section aria-label="Education/Qualifications" class="quals">
        <h2>Qualifications</h2>
        <div aria-label="Qualification List" class="quals-list" role="group">
            <CardWidget
                v-for="qual in quals"
                :key="qual.level"
                :elevate-on-hover="false"
                :elevated="false"
                :fill-on-hover="false"
                link="none"
                variant="filled"
            >
                <div class="qual-wrapper" role="region">
                    <h3>{{ qual.level }}</h3>
                    <span>{{ qual.quals }}</span>
                    <span>{{ qual.school }}</span>
                </div>
            </CardWidget>
        </div>
    </section>
</template>

<style lang="css" scoped>
.quals {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.qual-wrapper {
    display: flex;
    flex-direction: column;
}

.quals-list {
    display: grid;
    gap: 1rem;
}

@media screen and (min-width: 768px) {
    .quals-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
