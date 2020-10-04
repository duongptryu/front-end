import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Vuex from 'vuex';
import router from './router';
import Axios from 'axios';
import VueCarousel from 'vue-carousel';
import AOS from "aos";
import "aos/dist/aos.css";

// require

Vue.use(require('vue-cookies'))

// es2015 module
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('700d')

import './assets/css/icofont.min.css'
import './assets/css/style.css'

Vue.use(require('vue-cookies'))

Vue.use(VueCarousel);
Vue.use(Vuex)
Vue.use(Axios)
Vue.use(BootstrapVue)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init();
    },
    router,
    render: h => h(App),
}).$mount('#app')