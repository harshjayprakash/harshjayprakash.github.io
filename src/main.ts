import { type App, createApp } from 'vue';

import MainComponent from './MainComponent.vue';

const app: App<Element> = createApp(MainComponent);
app.mount('#app');
