<template>
    <h1 class="title">About</h1>
    <section class="quals">
        <h2 class="qual__title">Qualifications.</h2>
        <div class="qual-list">
            <article class="qual-card">
                <span class="qual-card__level">Bachelor's in Computer Science</span><br/>
                <span class="qual-card__school">The University of Winchester, 2021-24</span>
            </article>
            <article class="qual-card">
                <span class="qual-card__level">GCE A-Levels</span><br/>
                <span class="qual-card__courses">Computer Science, Maths, Fine Art</span><br/>
                <span class="qual-card__school">Barton Peveril Sixth Form, 2019-21</span>
            </article>
            <article class="qual-card">
                <span class="qual-card__level">GCSEs</span><br/>
                <span class="qual-card__courses">English, Maths, Science, Geography, Spanish, Computer Science, Fine Art</span>
            </article>
        </div>
    </section>
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
                    <ul>
                        <li>Angular</li>
                        <li>C Programming Language</li>
                        <li>HTML + CSS</li>
                        <li>GNU + Linux</li>
                        <li>Java</li>
                        <li>Microsoft Office</li>
                        <li>Microsoft Windows</li>
                        <li>Pascal</li>
                        <li>Python</li>
                        <li>Visual Basic .NET</li>
                        <li>VMware Workstation</li>
                        <li>Vue.js</li>
                    </ul>
                </div>
                <div class="skills-list__divider" v-if="isSkillTypeShown('traditional')">
                    <ul>
                        <li>Attention-to-detail</li>
                        <li>Time Management</li>
                        <li>Problem Solving</li>
                        <li>Work Ethic</li>
                        <li>Adaptable</li>
                        <li>Resilience</li>
                    </ul>
                </div>
            </article>
        </div>
    </section>
    <section class="story">
        <h2 class="story__title">My Story.</h2>
    </section>
</template>

<script lang="ts">
import type { SkillType } from '@/store/data.type';
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({
    data() {
        const displayedSkills: Ref<SkillType> = ref('technical');
        return { displayedSkills };
    },
    setup() { },
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

.skills .skills__tab-button {
    background-color: inherit;
    border: 0px;
    border-bottom: 0.15rem solid var(--clr-surface);
}

.skills .skills__tab-button--active {
    border-bottom-color: var(--clr-accent);
    background-color: var(--clr-surface-container-low);
    font-weight: 500;
}

.skills .skills-list__container {
    background-color: var(--clr-surface-container-low);
    padding: 1rem 0.2rem;
}

@media (min-width: 800px) {
    .qual-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>