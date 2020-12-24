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

Vue.use(SmartTable)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(VueGtag, {
  config: { id: "G-WSK0D83FEJ" },
});

const routes = [
  {
    path: '/', name: 'Index', components: {
      default: Home,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/contattami', name: 'contattami', components: {
      default: Contattami,
      header: Navbar
    }
  },
  {
    path: '/cookie-policy', name: 'cookie-policy', components: {
      default: Cookiepolicy,
      header: Navbar,
      footer: Footer
    }
  },
  { path: '/tabella', name: 'tabella', component: Tabella },
  {
    path: '/corsi-di-laurea', name: 'corsi', components: {
      default: Corsi,
      header: Navbar,
      footer: Footer
    }
  }
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

