<template>
    <div class="footer-container">
        <footer class="footer">
            <span class="footer__copyright">
                Copyright &copy; {{ yearShown }}. Harsh Jayprakash.
            </span>
            <br />
            <span class="footer__technology">
                Handcrafted with Vue. (Build {{ buildDate }}).
            </span>
            <SeparatorComponent/>
            <section class="footer__links">
                <a class="footer__link" v-for="link in links" :href="link.uri.toString()">
                    {{ link.name }}
                </a>
            </section>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SeparatorComponent from '../ui/SeparatorComponent.vue';

export default defineComponent({
    name: 'Footer',
    components: { SeparatorComponent },
    data() { 
        const yearShown: String = 'MMXXIV';
        const buildDate: String = '25.11.2024'
        const links: { name: String, uri: String }[] = [
            { 
                name: 'Source Code',
                uri: 'https://github.com/harshjayprakash/harshjayprakash.github.io',
            },
            {
                name: 'MIT License',
                uri: 'https://raw.githubusercontent.com/harshjayprakash/harshjayprakash.github.io/refs/heads/main/LICENSE'
            }
        ];
        return { yearShown, links, buildDate };
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.footer {
    max-width: var(--m-width);
    margin: auto;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    padding: 1rem;
}

.footer .footer__technology {
    color: var(--clr-on-surface-variant);
    margin-bottom: 0.5rem;
}

.footer .footer__links {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.75rem;
}

.footer .footer__link {
    text-decoration: none;
    color: var(--clr-on-surface-variant);
}

.footer .footer__link:hover  {
    color: inherit;
}
</style>