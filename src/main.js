import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import VueMeta from 'vue-meta'
import VueGtag from "vue-gtag"
import './scss/style.scss'
import router from './router'
import { NavbarPlugin } from 'bootstrap-vue'
import './registerServiceWorker'

Vue.config.performance = true
Vue.use(NavbarPlugin)
Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: { id: process.env.ID },
}, router);

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

