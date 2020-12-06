import Vue from 'vue'
import App from './App.vue'
import Home from './home.vue'
import Feedback from './feedback.vue'
import SmartTable from 'vuejs-smart-table'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag";

Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueRouter)

Vue.use(VueGtag, {
  config: { id: "G-WSK0D83FEJ" }
});


const routes = [
  { path: '/', name: 'Index', component: Home },
  { path: '/feedback', name: 'feedback', component: Feedback }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

