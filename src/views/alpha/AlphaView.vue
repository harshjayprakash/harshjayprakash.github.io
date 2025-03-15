<script lang="ts">
import { defineComponent } from 'vue';

import BadgeComponent from '@/components/BadgeComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import DividerComponent from '@/components/DividerComponent.vue';
import MarkdownComponent from '@/components/MarkdownComponent.vue';
import SpacerComponent from '@/components/SpacerComponent.vue';
import PersonaComponent from '@/components/PersonaComponent.vue';

const AlphaView = defineComponent({
    name: 'AlphaView',
    components: {
        BadgeComponent,
        ButtonComponent,
        DividerComponent,
        MarkdownComponent,
        SpacerComponent,
        PersonaComponent
    },
    methods: {
        hi() {
            alert('hi');
        }
    }
});

export default AlphaView;
</script>

<template>
    <p>Alpha View: Please note this page is testing components.</p>
    <SpacerComponent space="10rem" />
    <PersonaComponent
        name="Harsh Jayprakash"
        status="Available for work"
        imageUri="https://avatars.githubusercontent.com/u/58461297?v=4"
        indicator="available"
    >
        Available for work.
    </PersonaComponent>
    <SpacerComponent space="10rem" />
    <MarkdownComponent>
        <h1>This is a test.</h1>
        <p>
            Inventore assumenda id non voluptas natus numquam. Error dolores ut qui
            similique fuga ut quam doloribus. Occaecati facere occaecati voluptatibus est
            repellendus qui. Facilis voluptates reiciendis ratione ut. Sint velit ducimus
            dolor veritatis. In provident harum fuga doloremque numquam odio.
        </p>
        <p>
            Qui enim soluta libero quia. Non cupiditate voluptatibus qui quidem qui non.
            Reiciendis quia consequatur et quae esse sequi. Ut inventore nulla suscipit
            explicabo assumenda quibusdam. Porro possimus magni voluptates ea aspernatur
            consequatur ab atque. Occaecatieius eligendi ut et.
        </p>
        <p>
            Eaque aut aperiam ut labore ut earum est atque. Tenetur adipisci perferendis
            ut est non nulla voluptatem. Sint eos et voluptas molestiae quasi sequi rerum
            enim. Veritatis ut ratione asperiores. Quos nisi laborum alias vero expedita
            et et.
        </p>
        <p>
            Debitis fuga et maxime perspiciatis sint dolorum earum. Ut aut minus at natus.
            Doloribus natus rerum a nisi. Aut numquam voluptas officiis animi nihil
            cupiditate necessitatibus.
        </p>
        <p>
            Rerum earum quia porro. Atque et repellendus porro debitis magnam. Iusto animi
            voluptatem earum. Soluta est voluptatem voluptatibus ut nam odio voluptatum
            nostrum. Vitae modi hic
        </p>
        <h2>
            This is a second heading.
        </h2>
        <p>
            Qui enim soluta libero quia. Non cupiditate voluptatibus qui quidem qui non.
            Reiciendis quia consequatur et quae esse sequi. Ut inventore nulla suscipit
            explicabo assumenda quibusdam. Porro possimus magni voluptates ea aspernatur
            consequatur ab atque. Occaecatieius eligendi ut et.
        </p>
        <p>
            Eaque aut aperiam ut labore ut earum est atque. Tenetur adipisci perferendis
            ut est non nulla voluptatem. Sint eos et voluptas molestiae quasi sequi rerum
            enim. Veritatis ut ratione asperiores. Quos nisi laborum alias vero expedita
            et et.
        </p>
        <p>
            Qui enim soluta libero quia. Non cupiditate voluptatibus qui quidem qui non.
            Reiciendis quia consequatur et quae esse sequi. Ut inventore nulla suscipit
            explicabo assumenda quibusdam. Porro possimus magni voluptates ea aspernatur
            consequatur ab atque. Occaecatieius eligendi ut et.
        </p>
        <h3>
            third section in.
        </h3>
        <p>
            Qui enim soluta libero quia. Non cupiditate voluptatibus qui quidem qui non.
            Reiciendis quia consequatur et quae esse sequi. Ut inventore nulla suscipit
            explicabo assumenda quibusdam. Porro possimus magni voluptates ea aspernatur
            consequatur ab atque. Occaecatieius eligendi ut et.
        </p>
    </MarkdownComponent>

    <p>Alpha View</p>
    <div class="wrapper--alpha">
        <div class="fixed-size">

            <DividerComponent variant="horizontal" />
        </div>
        <ButtonComponent variant="standard">
            Standard Button
        </ButtonComponent>
        <br />
        <br />
        <ButtonComponent variant="accent">
            Accent Button
        </ButtonComponent>
        <br />
        <br />
        <BadgeComponent>
            Under Construction
        </BadgeComponent>
    </div>
</template>

<style lang="css" scoped>
.wrapper--alpha {
    padding: 5rem;
}

.fixed-size {
    inline-size: 3rem;
    block-size: 3rem;
}
</style>
