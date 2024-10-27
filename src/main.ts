import './assets/style/main.css';
import './main.fonts';
import { createApp, type App } from 'vue';
import Main from './Main.vue';

const app: App<Element> = createApp(Main);

app.mount('#app');
