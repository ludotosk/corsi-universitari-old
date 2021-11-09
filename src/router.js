import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Panel = () =>
    import ( /* webpackChunkName: "panel" */ './components/Panellink.vue')
const Navbar = () =>
    import ( /* webpackChunkName: "Navbar" */ './components/Navbar.vue')
const Footer = () =>
    import ( /* webpackChunkName: "Footer" */ './components/Footer.vue')

const routes = [{
        path: '/',
        components: {
            default: () =>
                import ( /* webpackChunkName: "corsi" */ './views/corsi-di-laurea.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/contattami',
        components: {
            default: () =>
                import ( /* webpackChunkName: "feedback" */ './views/contattami.vue'),
            header: Navbar,
            footer: Footer
        }
    },
    {
        path: '/cookie-policy',
        components: {
            default: () =>
                import ( /* webpackChunkName: "cookiepolicy" */ './views/cookie-policy.vue'),
            header: Navbar,
            footer: Footer
        }
    },
    {
        path: '/tabella',
        components: {
            default: () =>
                import ( /* webpackChunkName: "tabella" */ './views/tabella.vue')
        }
    },
    {
        path: '/lauree-triennali-elenco',
        components: {
            default: () =>
                import ( /* webpackChunkName: "ListaTriennale" */ './views/lista-corsi-di-laurea-triennali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    //{
    //path: '/lista-corsi-di-laurea-triennale-ad-accesso-libero', components: {
    //default:  () => import(/* webpackChunkName: "ListaAccesso" */ './views/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue'),
    //header: Navbar,
    //panel: Panel,
    //footer: Footer
    //}
    //},
    {
        path: '/lista-corsi-di-laurea-magistrale',
        components: {
            default: () =>
                import ( /* webpackChunkName: "ListaMagistrale" */ './views/lista-corsi-di-laurea-magistrali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    // {
    //   path: '/corsi-di-laurea-magistrale-a-ciclo-unico', components: {
    //     default: () => import(/* webpackChunkName: "CorsiCiclo" */ './views/corsi-di-laurea-magistrali-a-ciclo-unico.vue'),
    //     header: Navbar,
    //     panel: Panel,
    //     footer: Footer
    //   }
    // },
    {
        path: '/corsi-di-laurea-in-inglese',
        components: {
            default: () =>
                import ( /* webpackChunkName: "inglese" */ './views/corsi-di-laurea-in-inglese.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-padova',
        components: {
            default: () =>
                import ( /* webpackChunkName: "padova" */ './views/corsi-di-laurea-padova.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-bari',
        components: {
            default: () =>
                import ( /* webpackChunkName: "bari" */ './views/corsi-di-laurea-bari.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-bologna',
        components: {
            default: () =>
                import ( /* webpackChunkName: "bologna" */ './views/corsi-di-laurea-bologna.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-firenze',
        components: {
            default: () =>
                import ( /* webpackChunkName: "firenze" */ './views/corsi-di-laurea-firenze.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-milano',
        components: {
            default: () =>
                import ( /* webpackChunkName: "Milano" */ './views/corsi-di-laurea-milano.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-napoli',
        components: {
            default: () =>
                import ( /* webpackChunkName: "napoli" */ './views/corsi-di-laurea-napoli.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-palermo',
        components: {
            default: () =>
                import ( /* webpackChunkName: "palermo" */ './views/corsi-di-laurea-palermo.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-pisa',
        components: {
            default: () =>
                import ( /* webpackChunkName: "pisa" */ './views/corsi-di-laurea-pisa.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-roma',
        components: {
            default: () =>
                import ( /* webpackChunkName: "roma" */ './views/corsi-di-laurea-roma.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-torino',
        components: {
            default: () =>
                import ( /* webpackChunkName: "torino" */ './views/corsi-di-laurea-torino.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/lista-corsi-di-laurea-senza-test',
        components: {
            default: () =>
                import ( /* webpackChunkName: "lista corsi senza test" */ './views/lista-corsi-di-laurea-senza-test.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-online',
        components: {
            default: () =>
                import ( /* webpackChunkName: "corsi online" */ './views/corsi-di-laurea-online.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/corsi-di-laurea-internazionali',
        components: {
            default: () =>
                import ( /* webpackChunkName: "corsi inrernazionali" */ './views/corsi-di-laurea-internazionali.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/comunita',
        components: {
            default: () =>
                import ( /* webpackChunk: "comunita" */ './views/comunita.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/migliori-corsi-di-laurea',
        components: {
            default: () =>
                import ( /* webpackChunk: "migliori corsi di laurea" */ './views/migliori-corsi-di-laurea.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/migliori-universita-italiane',
        components: {
            default: () =>
                import ( /* webpackChunk : "migliori universita italiane" */ './views/migliori-universita.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/migliori-universita-medicina',
        components: {
            default: () =>
                import ( /* webpackChunk : "migliori universita medicina" */ './views/migliori-corsi-med.vue'),
            header: Navbar,
            panel: Panel,
            footer: Footer
        }
    },
    {
        path: '/link',
        components: {
            default: () =>
                import ( /* webpackChunk : "pagina link" */ './views/link.vue'),
        }
    }
]


const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router;