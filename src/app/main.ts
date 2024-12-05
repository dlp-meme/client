import '@app/styles/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

import App from '@app/App.vue';
import router from '@app/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.mount('#app');
