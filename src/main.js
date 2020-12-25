import Vue from 'vue'
import App from './App.vue'
import SmartTable from 'vuejs-smart-table'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import VueGtag from "vue-gtag"
import '../scss/style.scss'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import 'bootstrap/js/dist/collapse'

const Home = () => import(/* webpackChunkName: "home" */ './home.vue')
const Corsi = () => import(/* webpackChungName: "corsi" */ './corsi-di-laurea.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')
const ListaTriennali = () => import(/* webpackChunkName: "lista-triennali" */ './lista-corsi-di-laurea-triennali.vue')
const ListaMagistrali = () => import(/* webpackChunkName: "lista-magistrali" */ './lista-corsi-di-laurea-magistrali.vue')

Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: { id: "G-WSK0D83FEJ" },
});

const routes = [
  {
    path: '/', components: {
      default: Home,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/contattami', components: {
      default: Contattami,
      header: Navbar
    }
  },
  {
    path: '/cookie-policy', components: {
      default: Cookiepolicy,
      header: Navbar,
      footer: Footer
    }
  },
  { path: '/tabella', component: Tabella },
  {
    path: '/corsi-di-laurea', components: {
      default: Corsi,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-triennali', components: {
      default: ListaTriennali,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-magistrali', components: {
      default: ListaMagistrali,
      header: Navbar,
      footer: Footer
    }
  },
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

