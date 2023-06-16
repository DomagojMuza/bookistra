
import "./assets/custom_variables.scss";
import "./middleware/axios";
import "./functions/globals";
import vSelect from 'vue-select'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import store from '@/store.js'

import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$store = store
app.component('v-select', vSelect);
app.component('VueDatePicker', VueDatePicker);
app.use(router);



app.mount('#app');



