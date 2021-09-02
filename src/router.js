import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Panel = () => import(/* webpackChunkName: "panel" */'./panellink.vue')
const Corsi = () => import(/* webpackChunkName: "corsi" */ './corsi-di-laurea.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')
const ListaMagistrale = () => import(/* webpackChunkName: "ListaMagistrale" */ './liste/lista-corsi-di-laurea-magistrali.vue')
const ListaAccesso = () => import(/* webpackChunkName: "ListaAccesso" */ './liste/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue')
const CorsiCiclo = () => import(/* webpackChunkName: "CorsiCiclo" */ './livello/corsi-di-laurea-magistrali-a-ciclo-unico.vue')
const Navbar = () => import(/* webpackChunkName: "Navbar" */ './Navbar.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ './Footer.vue')
const Inglese = () => import(/* webpackChunkName: "inglese" */ './corsi-di-laurea-in-inglese.vue')
const Padova = () => import(/* webpackChunkName: "padova" */ './citta/corsi-di-laurea-padova.vue')
const Bologna = () => import(/* webpackChunkName: "bologna" */ './citta/corsi-di-laurea-bologna.vue')
const Firenze = () => import(/* webpackChunkName: "firenze" */ './citta/corsi-di-laurea-firenze.vue')
const Milano = () => import(/* webpackChunkName: "Milano" */ './citta/corsi-di-laurea-milano.vue')


const routes = [
  {
    path: '/', components: {
      default: Corsi,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/contattami', components: {
      default: Contattami,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/cookie-policy', components: {
      default: Cookiepolicy,
      header: Navbar,
      footer: Footer
    }
  },
  {
    path: '/tabella', components: {
      default: Tabella
    }
  },
  {
    path: '/tutti-i-corsi-di-laurea', components: {
      default: Corsi,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/lauree-triennali-elenco', components: {
      default: () => import(/* webpackChunkName: "ListaTriennale" */ './liste/lista-corsi-di-laurea-triennali.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-triennale-ad-accesso-libero', components: {
      default: ListaAccesso,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-magistrale', components: {
      default: ListaMagistrale,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-magistrale-a-ciclo-unico', components: {
      default: CorsiCiclo,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-in-inglese', components: {
      default: Inglese,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-padova', components: {
      default: Padova,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-bari', components: {
      default: () => import(/* webpackChunkName: "bari" */ './citta/corsi-di-laurea-bari.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-bologna', components: {
      default: Bologna,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-firenze', components: {
      default: Firenze,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-milano', components: {
      default: Milano,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-napoli', components: {
      default: () => import(/* webpackChunkName: "napoli" */ './citta/corsi-di-laurea-napoli.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-palermo', components: {
      default: () => import(/* webpackChunkName: "palermo" */ './citta/corsi-di-laurea-palermo.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-pisa', components: {
      default: () => import(/* webpackChunkName: "pisa" */ './citta/corsi-di-laurea-pisa.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-roma', components: {
      default: () => import(/* webpackChunkName: "roma" */ './citta/corsi-di-laurea-roma.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-torino', components: {
      default: () => import(/* webpackChunkName: "torino" */ './citta/corsi-di-laurea-torino.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/lista-corsi-di-laurea-senza-test', components: {
      default: () => import(/* webpackChunkName: "lista corsi senza test" */ './no-test/lista-corsi-di-laurea-senza-test.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-online', components: {
      default: () => import(/* webpackChunkName: "corsi online" */ './corsi-di-laurea-online.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-internazionali', components: {
      default: () => import(/* webpackChunkName: "corsi inrernazionali" */ './corsi-di-laurea-internazionali.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/comunita', components: {
      default: () => import(/* webpackChunk: "comunita" */ './comunita.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/migliori-corsi-di-laurea', components: {
      default: () => import(/* webpackChunk: "migliori corsi di laurea" */ './migliori-corsi-di-laurea.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/migliori-universita-italiane', components: {
      default: () => import(/* webpackChunk : "migliori universita italiane" */ './migliori-universita.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/migliori-universita-medicina', components: {
      default: () => import(/* webpackChunk : "migliori universita medicina" */ './migliori-corsi-med.vue'),
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  }
]


const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router;