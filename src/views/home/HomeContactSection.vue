<script lang="ts">
import { defineComponent } from 'vue';

const HomeContactSection = defineComponent({
    name: 'HomeContactSection',
});

export default HomeContactSection;
</script>

<template>
    <section class="home-contact">
        <h2>Say Hello.</h2>
        <div class="social-list">
            <table class="social-table">
                <tr>
                    <td>Linkedin</td>
                    <td>harshjayprakash7</td>
                </tr>
                <tr>
                    <td>GitHub</td>
                    <td>harshjayprakash</td>
                </tr>
                <tr>
                    <td>CV</td>
                    <td>Download PDF</td>
                </tr>
            </table>
        </div>
    </section>
</template>

<style lang="css" scoped>
.social-list {
    display: flex;
    margin-inline: auto;
}

.social-table {
    width: fit-content;
    height: fit-content;
}

.social-table tr {
    display: flex;
    gap: 1rem;
}
</style>
