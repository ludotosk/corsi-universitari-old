import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import VueMeta from 'vue-meta'
import VueGtag from "vue-gtag"
import '../scss/style.scss'
import router from './router'
import { NavbarPlugin } from 'bootstrap-vue'
import './registerServiceWorker'

Vue.use(NavbarPlugin)
Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueGtag, {
  config: { id: "G-WSK0D83FEJ" },
}, router);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

