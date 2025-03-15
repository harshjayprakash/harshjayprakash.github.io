<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';

const FooterComponent = defineComponent({
    name: 'FooterComponent',
    components: {
        DividerComponent,
        LinkComponent,
    },
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
        <DividerComponent />
        <div class="links">
            <LinkComponent
                variant="external"
                path="https://github.com/harshjayprakash/harshjayprakash.github.io"
            >
                Source
            </LinkComponent>
        </div>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    padding-block: 1rem;
    font-size: 0.889rem;
}

.footer .links {
    display: flex;
    margin-block-start: 0.5rem;
}
</style>
