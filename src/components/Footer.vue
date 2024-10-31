<template>
    <footer class="footer">
        <p>Copyright &copy; {{ copyrightYear }}. Harsh Jayprakash</p>
        <p>Handcrafted with Vue</p>
        <a href="https://github.com/harshjayprakash/personal-portfolio">View Source Code &UpperRightArrow;</a>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const copyrightYear: string = 'MMXXIV';

        return { copyrightYear };
    },
});
</script>

<style lang="css" scoped>
.footer {
    padding: 1rem;
}
</style>