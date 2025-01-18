<template>
    <footer class="footer">
        <p class="copyright">
            &copy; {{ year.toString() }} Harsh Jayprakash.
        </p>
        <p class="handcrafted">
            Handcrafted with Vue. ({{ buildDate }}).
        </p>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
    data() {
        const year: String = 'MMXXV';
        const buildDate: String = '2025.H1.4';
        return { year, buildDate };
    }
});
</script>

<style lang="css" scoped>
.footer {
    padding: 2rem 0;
}
</style>
