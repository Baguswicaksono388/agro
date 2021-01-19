import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CoreuiVue from '@coreui/vue'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import { iconsSet as icons } from './assets/icons/icons.js'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/main.css";
// import "/assets/scss/style.scss";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

require('@/store/subscriber');

Vue.use(VueToast);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(CoreuiVue);

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    icons,
    render: h => h(App)
  }).$mount('#app')
})

