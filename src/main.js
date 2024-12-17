import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/router'; // Обновленный путь к файлу настройки Vue Router
import vuetify from './router/vuetify'; // Обновленный путь к файлу настройки Vuetify

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(vuetify);
app.mount('#app');
