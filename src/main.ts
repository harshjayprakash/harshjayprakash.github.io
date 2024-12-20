import '@fontsource-variable/inter';
import './assets/style/main.css';
import { createApp, type App } from 'vue';
import Main from './Main.vue';
import router from './router';

const app: App<Element> = createApp(Main);

app.use(router)

app.mount('#app');
