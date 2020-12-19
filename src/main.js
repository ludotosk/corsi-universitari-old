import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import '../scss/style.scss'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag";
//import Navbar from './Navbar.vue';

const Home = () => import(/* webpackChunkName: "home" */ './home.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')

Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: { id: "G-WSK0D83FEJ" },
});

const routes = [
  {
    path: '/', name: 'Index', component: Home },
  { path: '/contattami', name: 'contattami', component: Contattami },
  { path: '/cookie-policy', name: 'cookie-policy', component: Cookiepolicy },
  { path: '/tabella', name: 'tabella', component: Tabella }
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

