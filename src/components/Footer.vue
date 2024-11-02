<template>
    <footer class="footer">
        <hr class="footer__seperator" />
        <p class="footer__copyright">
            Copyright &copy; {{ yearAsRomanNumeral }}. Harsh Jayprakash.
        </p>
        <p class="footer__technology">
            Handcrafted with Vue.
        </p>
        <div class="footer__divider footer__links">
            <a class="footer__link" 
                href="https://github.com/harshjayprakash/harshjayprakash.github.io"
            >
                View Source Code &UpperRightArrow;
            </a>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        const yearAsRomanNumeral: string = 'MMXXIV'
        return { yearAsRomanNumeral };
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.footer {
    padding: 1rem;
    
}

.footer .footer__seperator {
    border: 0;
    border-top: 0.1rem solid var(--clr-surface-container-high);
    padding-bottom: 1rem;
}

.footer > * {
    font-size: 0.85rem;
}
</style>