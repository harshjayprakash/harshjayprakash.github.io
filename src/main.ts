import { type App, createApp } from 'vue';

import './assets/style/main.css'
import MainComponent from './MainComponent.vue';

const app: App<Element> = createApp(MainComponent);
app.mount('#app');
