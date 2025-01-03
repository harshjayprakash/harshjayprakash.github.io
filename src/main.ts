import { type App, createApp } from 'vue';

import '@fontsource-variable/inter/opsz.css';
import './assets/style/main.css'

import MainComponent from './MainComponent.vue';
import router from './router';

const app: App<Element> = createApp(MainComponent);
app.use(router);
app.mount('#app');
