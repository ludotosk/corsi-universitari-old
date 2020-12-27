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
import 'bootstrap/js/dist/dropdown'


const Home = () => import(/* webpackChunkName: "home" */ './home.vue')
const Corsi = () => import(/* webpackChungName: "corsi" */ './corsi-di-laurea.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')
const CorsiUnibo = () => import(/* webpackChungName: "corsiUnibo" */ './uni/corsi-di-laurea-unibo.vue')
const CorsiUnipi = () => import(/* webpackChungName: "corsiUnipi" */ './uni/corsi-di-laurea-unipi.vue')
const CorsiSapienza = () => import(/* webpackChungName: "corsiSapienza" */ './uni/corsi-di-laurea-sapienza.vue')
const CorsiUnipd = () => import(/* webpackChungName: "corsiUnipd" */ './uni/corsi-di-laurea-unipd.vue')
const CorsiBicocca = () => import(/* webpackChungName: "corsiBicocca" */ './uni/corsi-di-laurea-bicocca.vue')
const CorsiUniba = () => import(/* webpackChungName: "corsiUniba" */ './uni/corsi-di-laurea-uniba.vue')
const CorsiUnifi = () => import(/* webpackChungName: "corsiUnifi" */ './uni/corsi-di-laurea-unifi.vue')
const CorsiUnimi = () => import(/* webpackChungName: "corsiUnimi" */ './uni/corsi-di-laurea-unimi.vue')
const CorsiUnina = () => import(/* webpackChungName: "corsiUnina" */ './uni/corsi-di-laurea-unina.vue')
const CorsiUnipa = () => import(/* webpackChungName: "corsiUnipa" */ './uni/corsi-di-laurea-unipa.vue')
const CorsiUniroma1 = () => import(/* webpackChungName: "corsiUniroma1" */ './uni/corsi-di-laurea-uniroma1.vue')
const CorsiUnisa = () => import(/* webpackChungName: "corsiUnisa" */ './uni/corsi-di-laurea-unisa.vue')
const CorsiUnito = () => import(/* webpackChungName: "corsiUnito" */ './uni/corsi-di-laurea-unito.vue')
const CorsiUnipr = () => import(/* webpackChungName: "corsiUnipr" */ './uni/corsi-di-laurea-unipr.vue')
const CorsiPolimi = () => import(/* webpackChungName: "corsiPolimi" */ './uni/corsi-di-laurea-polimi.vue')
const Uni = () => import(/* webpackChungName: "Uni" */ './università.vue')
const ListaTriennale = () => import(/* webpackChungName: "ListaTriennale" */ './liste/lista-corsi-di-laurea-triennali.vue')
const ListaMagistrale = () => import(/* webpackChungName: "ListaMagistrale" */ './liste/lista-corsi-di-laurea-magistrali.vue')
const ListaCiclo = () => import(/* webpackChungName: "ListaCiclo" */ './liste/lista-corsi-di-laurea-magistrali-ciclo-unico.vue')
const ListaAccesso = () => import(/* webpackChungName: "ListaAccesso" */ './liste/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue')
const CorsiTriennale = () => import(/* webpackChungName: "CorsiTriennale" */ './livello/corsi-di-laurea-triennali.vue')
const CorsiMagistrale = () => import(/* webpackChungName: "CorsiMagistrale" */ './livello/corsi-di-laurea-magistrali.vue')
const CorsiCiclo = () => import(/* webpackChungName: "CorsiCiclo" */ './livello/corsi-di-laurea-magistrali-a-ciclo-unico.vue')
const CorsiLiberi = () => import(/* webpackChungName: "CorsiLiberi" */ './livello/corsi-di-laurea-triennali-accesso-libero.vue')

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
    path: '/corsi-di-laurea-unibo', components: {
      default: CorsiUnibo,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unipi', components: {
      default: CorsiUnipi,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-sapienza', components: {
      default: CorsiSapienza,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unipd', components: {
      default: CorsiUnipd,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-bicocca', components: {
      default: CorsiBicocca,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-polimi', components: {
      default: CorsiPolimi,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-uniba', components: {
      default: CorsiUniba,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unibo', components: {
      default: CorsiUnibo,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unifi', components: {
      default: CorsiUnifi,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unimi', components: {
      default: CorsiUnimi,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unina', components: {
      default: CorsiUnina,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unipa', components: {
      default: CorsiUnipa,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unipr', components: {
      default: CorsiUnipr,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-uniroma1', components: {
      default: CorsiUniroma1,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unisa', components: {
      default: CorsiUnisa,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unito', components: {
      default: CorsiUnito,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/universita', components: {
      default: Uni,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-triennale', components: {
      default: ListaTriennale,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-triennale-ad-accesso-libero', components: {
      default: ListaAccesso,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-magistrale', components: {
      default: ListaMagistrale,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-magistrale-a-ciclo-unico', components: {
      default: ListaCiclo,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-triennale', components: {
      default: CorsiTriennale,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-magistrale', components: {
      default: CorsiMagistrale,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-magistrale-a-ciclo-unico', components: {
      default: CorsiCiclo,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-triennali-ad-accesso-libero', components: {
      default: CorsiLiberi,
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

