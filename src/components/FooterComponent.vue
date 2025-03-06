<script lang="ts">
import { defineComponent } from 'vue';

const FooterComponent = defineComponent({
    name: 'FooterComponent',
    setup() {
        const _year = 'MMXXV';

        return {
            copyrightYear: _year as String
        };
    }
});

export default FooterComponent;
</script>

<template>
    <footer class="footer">
        <small>Copyright &copy; {{ copyrightYear }} Harsh Jayprakash.</small>
        <small>Handcrafted with Vue.</small>
    </footer>
</template>
