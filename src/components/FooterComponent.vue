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
        <small>Copyright &copy; {{ copyrightYear }} Harsh Jayprakash. </small>
        <small>Handcrafted with Vue. Under construction.</small>
        <hr class="divider" />
        <div class="links">
            <a>Source Code</a>
            <hr class="vbar" />
            <a>Uses</a>
            <hr class="vbar" />
            <a>License</a>
            <hr class="vbar" />
            <a>Privacy</a>
        </div>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    padding-block: 1rem;
}

.footer .links {
    display: flex;
    margin-block-start: 0.5rem;
}

.divider {
    border: 0;
    border-block-end: 0.1rem solid var(--clr-on-surface-neutral);
    opacity: 0.2;
    margin-block: 1rem;
}

.vbar {
    border: 0;
    border-inline-end: 0.1rem solid var(--clr-on-surface-neutral);
    margin-inline: 1rem;
    opacity: 0.2;
}
</style>
