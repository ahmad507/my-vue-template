/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.8.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueI18Next from '@panter/vue-i18next';
import ToggleButton from 'vue-js-toggle-button';
import VueCompositionAPI from '@vue/composition-api'
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";

import './vendor.js'

import App from './App.vue'
import router from './router'
import i18next from './i18n.js'
import store from './store'
import './data/db'
require('./js/jquery.simple-tree-picker.js')

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueI18Next);
Vue.use(ToggleButton);
Vue.use(TreeViewPlugin);

// Composition API
Vue.use(VueCompositionAPI);

const i18n = new VueI18Next(i18next);

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
