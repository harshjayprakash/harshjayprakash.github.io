<template>
    <section class="skills">
        <h2 class="skills__title">Skills.</h2>
        <div class="skills-container">
            <div class="skills__tab-container">
                <button class="skills__tab-button" 
                    :class="{ 'skills__tab-button--active': displayedSkills === 'technical' }"
                    @click="onSkillButtonClick('technical')"
                >
                    Technical
                </button>
                <button class="skills__tab-button"
                    :class="{ 'skills__tab-button--active': displayedSkills === 'traditional' }"
                    @click="onSkillButtonClick('traditional')"
                >
                    Traditional
                </button>
            </div>
            <article class="skills-list__container">
                <div class="skills-list__divider" v-if="isSkillTypeShown('technical')">
                    <ul class="skills__tech-list">
                        <li v-for="skill in technicalSkills">{{ skill }}</li>
                    </ul>
                </div>
                <div class="skills-list__divider" v-if="isSkillTypeShown('traditional')">
                    <ul class="skills__traditional-list">
                        <li v-for="skill in traditionalSkills">{{ skill }}</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import { technicalSkills, traditionalSkills } from '@/store/data/skillList';
import type { SkillType } from '@/store/interfaces/SkillType';
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
    name: 'AboutSkillsSection',
    data() {
        const displayedSkills: Ref<SkillType> = ref('technical');
        return { displayedSkills, technicalSkills, traditionalSkills };
    },
    methods: {
        onSkillButtonClick(value: SkillType) {
            this.displayedSkills = value;
        },
        isSkillTypeShown(value: SkillType) {
            return (this.displayedSkills === value);
        }
    }
});
</script>

<style lang="css" scoped>
.quals .qual-list {
    display: grid;
    gap: 1.5rem;
}

.quals .qual-card {
    padding: 1rem;
    background-color: var(--clr-surface-container-low);
}

.quals .qual-card__level {
    font-weight: 500;
}

.skills,
.quals {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
}

.skills .skills__title,
.quals .qual__title {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
}

.skills .skills__tab-button {
    padding: 0.5rem 1rem;
    background-color: inherit;
    border: 0px;
    border-top: 0.15rem solid var(--clr-surface);
}

.skills .skills__tab-button--active {
    border-top-color: var(--clr-accent);
    background-color: var(--clr-surface-container);
    font-weight: 500;
}

.skills .skills-list__container {
    background-color: var(--clr-surface-container);
    padding: 1rem 0.2rem;
}

.skills .skills__tech-list,
.skills .skills__traditional-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2rem;
}

@media (min-width: 800px) {
    .qual-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>