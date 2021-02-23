import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ './home.vue')
const Corsi = () => import(/* webpackChunkName: "corsi" */ './corsi-di-laurea.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')
const CorsiUnibo = () => import(/* webpackChunkName: "corsiUnibo" */ './uni/corsi-di-laurea-unibo.vue')
const CorsiUnipi = () => import(/* webpackChunkName: "corsiUnipi" */ './uni/corsi-di-laurea-unipi.vue')
const CorsiSapienza = () => import(/* webpackChunkName: "corsiSapienza" */ './uni/corsi-di-laurea-sapienza.vue')
const CorsiUnipd = () => import(/* webpackChunkName: "corsiUnipd" */ './uni/corsi-di-laurea-unipd.vue')
const CorsiBicocca = () => import(/* webpackChunkName: "corsiBicocca" */ './uni/corsi-di-laurea-bicocca.vue')
const CorsiUniba = () => import(/* webpackChunkName: "corsiUniba" */ './uni/corsi-di-laurea-uniba.vue')
const CorsiUnifi = () => import(/* webpackChunkName: "corsiUnifi" */ './uni/corsi-di-laurea-unifi.vue')
const CorsiUnimi = () => import(/* webpackChunkName: "corsiUnimi" */ './uni/corsi-di-laurea-unimi.vue')
const CorsiUnina = () => import(/* webpackChunkName: "corsiUnina" */ './uni/corsi-di-laurea-unina.vue')
const CorsiUnipa = () => import(/* webpackChunkName: "corsiUnipa" */ './uni/corsi-di-laurea-unipa.vue')
const CorsiUniroma1 = () => import(/* webpackChunkName: "corsiUniroma1" */ './uni/corsi-di-laurea-uniroma1.vue')
const CorsiUnisa = () => import(/* webpackChunkName: "corsiUnisa" */ './uni/corsi-di-laurea-unisa.vue')
const CorsiUnito = () => import(/* webpackChunkName: "corsiUnito" */ './uni/corsi-di-laurea-unito.vue')
const CorsiUnipr = () => import(/* webpackChunkName: "corsiUnipr" */ './uni/corsi-di-laurea-unipr.vue')
const CorsiPolimi = () => import(/* webpackChunkName: "corsiPolimi" */ './uni/corsi-di-laurea-polimi.vue')
const Uni = () => import(/* webpackChunkName: "Uni" */ './università.vue')
const ListaTriennale = () => import(/* webpackChunkName: "ListaTriennale" */ './liste/lista-corsi-di-laurea-triennali.vue')
const ListaMagistrale = () => import(/* webpackChunkName: "ListaMagistrale" */ './liste/lista-corsi-di-laurea-magistrali.vue')
const ListaCiclo = () => import(/* webpackChunkName: "ListaCiclo" */ './liste/lista-corsi-di-laurea-magistrali-ciclo-unico.vue')
const ListaAccesso = () => import(/* webpackChunkName: "ListaAccesso" */ './liste/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue')
const CorsiTriennale = () => import(/* webpackChunkName: "CorsiTriennale" */ './livello/corsi-di-laurea-triennali.vue')
const CorsiMagistrale = () => import(/* webpackChunkName: "CorsiMagistrale" */ './livello/corsi-di-laurea-magistrali.vue')
const CorsiCiclo = () => import(/* webpackChunkName: "CorsiCiclo" */ './livello/corsi-di-laurea-magistrali-a-ciclo-unico.vue')
const CorsiLiberi = () => import(/* webpackChunkName: "CorsiLiberi" */ './livello/corsi-di-laurea-triennali-accesso-libero.vue')
const Navbar = () => import(/* webpackChunkName: "Navbar" */ './Navbar.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ './Footer.vue')
const CorsiMedicina = () => import(/* webpackChunkName: "corsimedicina" */ './area/corsi-di-laurea-medicina.vue')
const CorsiPsicologia = () => import(/* webpackChunkName: "corsipsicologia" */ './area/corsi-di-laurea-psicologia.vue')
const CorsiFisioterapia = () => import(/* webpackChunkName: "corsifisioterapia" */ './area/corsi-di-laurea-fisioterapia.vue')
const CorsiStoria = () => import(/* webpackChunkName: "corsistoria" */ './area/corsi-di-laurea-storia.vue')
const CorsiInfermieristica = () => import(/* webpackChunkName: "corsiinfermieristica" */ './area/corsi-di-laurea-infermieristica.vue')
const CorsiMatematica = () => import(/* webpackChunkName: "corsimatematica" */ './area/corsi-di-laurea-matematica.vue')
const CorsiFormazionePrimaria = () => import(/* webpackChunkName: "corsiformazioneprimaria" */ './area/corsi-di-laurea-scienze-della-formazione-primaria.vue')
const CorsiBiologia = () => import(/* webpackChunkName: "corsibiologia" */ './area/corsi-di-laurea-biologia.vue')
const CorsiFilosofia = () => import(/* webpackChunkName: "corsifilosofia" */ './area/corsi-di-laurea-filosofia.vue')
const CorsiBiotecnologia = () => import(/* webpackChunkName: "corsibiotecnologie" */ './area/corsi-di-laurea-biotecnologia.vue')
const CorsiDietistica = () => import(/* webpackChunkName: "corsidietistica" */ './area/corsi-di-laurea-dietistica.vue')
const CorsiFarmacia = () => import(/* webpackChunkName: "corsifarmacia" */ './area/corsi-di-laurea-farmacia.vue')
const CorsiGiurisprudenza = () => import(/* webpackChunkName: "corsigiurisprudenza" */ './area/corsi-di-laurea-giurisprudenza.vue')
const CorsiInformatica = () => import(/* webpackChunkName: "corsiinformatica" */ './area/corsi-di-laurea-informatica.vue')
const CorsiLettere = () => import(/* webpackChunkName: "corsilettere" */ './area/corsi-di-laurea-lettere.vue')
const CorsiLogopedia = () => import(/* webpackChunkName: "corsilogopedia" */ './area/corsi-di-laurea-logopedia.vue')
const CorsiMotorie = () => import(/* webpackChunkName: "corsimotorie" */ './area/corsi-di-laurea-scienze-motorie.vue')
const CorsiFisica = () => import(/* webpackChunkName: "corsifisica" */ './area/corsi-di-laurea-fisica.vue')
const AreaAccademica = () => import(/* webpackChunkName: "areaaccademica" */ './area-accademica.vue')
const Inglese = () => import(/* webpackChunkName: "inglese" */ './corsi-di-laurea-in-inglese.vue')
const Guida = () => import(/* webpackChunkName: "guida" */ './guida.vue')
const Padova = () => import(/* webpackChunkName: "padova" */ './citta/corsi-di-laurea-padova.vue')
const Bari = () => import(/* webpackChunkName: "bari" */ './citta/corsi-di-laurea-bari.vue')
const Bologna = () => import(/* webpackChunkName: "bologna" */ './citta/corsi-di-laurea-bologna.vue')
const Firenze = () => import(/* webpackChunkName: "firenze" */ './citta/corsi-di-laurea-firenze.vue')
const Genova = () => import(/* webpackChunkName: "genova" */ './citta/corsi-di-laurea-genova.vue')
const Milano = () => import(/* webpackChunkName: "Milano" */ './citta/corsi-di-laurea-milano.vue')
const Napoli = () => import(/* webpackChunkName: "napoli" */ './citta/corsi-di-laurea-napoli.vue')
const Pavia = () => import(/* webpackChunkName: "pavia" */ './citta/corsi-di-laurea-pavia.vue')
const Pisa = () => import(/* webpackChunkName: "pisa" */ './citta/corsi-di-laurea-pisa.vue')
const Roma = () => import(/* webpackChunkName: "roma" */ './citta/corsi-di-laurea-roma.vue')
const Torino = () => import(/* webpackChunkName: "torino" */ './citta/corsi-di-laurea-torino.vue')
const Venezia = () => import(/* webpackChunkName: "venezia" */ './citta/corsi-di-laurea-venezia.vue')
const Verona = () => import(/* webpackChunkName: "verona" */ './citta/corsi-di-laurea-verona.vue')
const Citta = () => import(/* webpackChunkName: "citta" */ './citta.vue')
const CorsiKore = () => import(/* webpackChunkName: "kore" */ './uni/corsi-di-laurea-unikore.vue')
const CorsiUnivda = () => import(/* webpackChunkName: "univda" */ './uni/corsi-di-laurea-univda.vue')
const CorsiUnipegaso = () => import(/* webpackChunkName: "unipegaso" */ './uni/corsi-di-laurea-unipegaso.vue')
const CorsiUnicusano = () => import(/* webpackChunkName: "unicusano" */ './uni/corsi-di-laurea-unicusano.vue')
const CorsiEcampus = () => import(/* webpackChunkName: "ecampus" */ './uni/corsi-di-laurea-ecampus.vue')
const CorsiMercatorum = () => import(/* webpackChunkName: "mercatorum" */ './uni/corsi-di-laurea-mercatorum.vue')
const CorsiBocconi = () => import(/* webpackChunkName: "bocconi" */ './uni/corsi-di-laurea-bocconi.vue')
const CorsiFederico = () => import(/* webpackChunkName: "federico" */ './uni/corsi-di-laurea-federico-ii.vue')
const CorsiRomaTre = () => import(/* webpachChunkName: "romatre" */ './uni/corsi-di-laurea-roma-tre.vue')
const CorsiTor = () => import(/* webpackChunkName: "tor" */ './uni/corsi-di-laurea-tor-vergata.vue')
const CorsiUninettuno = () => import(/* webpackChunkName: "uninettuno" */ './uni/corsi-di-laurea-uninettuno.vue')
const MasterPrimo = () => import(/* webpackChunkName: "master primo" */ './master/master-primo-livello.vue')
const MasterSecondo = () => import(/* webpackChunkName: "master secondo" */ './master/master-secondo-livello.vue')
const ListaMasterPrimo = () => import(/* webpackChunkName: "lista master primo" */ './liste/lista-master-di-primo-livello.vue')
const ListaMasterSecondo = () => import(/* webpackChunkName: "lista master secondo" */ './liste/lista-master-di-secondo-livello.vue')

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
        header: Navbar,CorsiMatematica
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
    {
      path: '/corsi-di-laurea-medicina', components: {
        default: CorsiMedicina,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-psicologia', components: {
        default: CorsiPsicologia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-fisioterapia', components: {
        default: CorsiFisioterapia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-storia', components: {
        default: CorsiStoria,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-infermieristica', components: {
        default: CorsiInfermieristica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-matematica', components: {
        default: CorsiMatematica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-scienze-della-formazione-primaria', components: {
        default: CorsiFormazionePrimaria,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-biologia', components: {
        default: CorsiBiologia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-filosofia', components: {
        default: CorsiFilosofia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-fisica', components: {
        default: CorsiFisica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-biotecnologia', components: {
        default: CorsiBiotecnologia,
        header: Navbar,
        footer: Footer
      }
    },
      {
      path: '/corsi-di-laurea-dietistica', components: {
        default: CorsiDietistica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-farmacia', components: {
        default: CorsiFarmacia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-giurisprudenza', components: {
        default: CorsiGiurisprudenza,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-informatica', components: {
        default: CorsiInformatica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-lettere', components: {
        default: CorsiLettere,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-logopedia', components: {
        default: CorsiLogopedia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-scienze-motorie', components: {
        default: CorsiMotorie,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/area-accademica', components: {
        default: AreaAccademica,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-in-inglese', components: {
        default: Inglese,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/guida', components: {
        default: Guida,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-padova', components: {
        default: Padova,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-bari', components: {
        default: Bari,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-bologna', components: {
        default: Bologna,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-firenze', components: {
        default: Firenze,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-genova', components: {
        default: Genova,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-milano', components: {
        default: Milano,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-napoli', components: {
        default: Napoli,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-pavia', components: {
        default: Pavia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-pisa', components: {
        default: Pisa,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-roma', components: {
        default: Roma,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-torino', components: {
        default: Torino,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-venezia', components: {
        default: Venezia,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-verona', components: {
        default: Verona,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/citta', components: {
        default: Citta,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-unikore', components: {
        default: CorsiKore,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-univda', components: {
        default: CorsiUnivda,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-unipegaso', components: {
        default: CorsiUnipegaso,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-unicusano', components: {
        default: CorsiUnicusano,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-ecampus', components: {
        default: CorsiEcampus,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-mercatorum', components: {
        default: CorsiMercatorum,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-bocconi', components: {
        default: CorsiBocconi,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-federico-ii', components: {
        default: CorsiFederico,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-roma-tre', components: {
        default: CorsiRomaTre,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-tor-vergata', components: {
        default: CorsiTor,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-uninettuno', components: {
        default: CorsiUninettuno,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/master-primo-livello', components: {
        default: MasterPrimo,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/master-secondo-livello', components: {
        default: MasterSecondo,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/lista-master-primo-livello', components: {
        default: ListaMasterPrimo,
        header: Navbar,
        footer: Footer
      }
    },
    {
      path: '/lista-master-secondo-livello', components: {
        default: ListaMasterSecondo,
        header: Navbar,
        footer: Footer
      }
    }
  ]
  
  
  const router = new VueRouter({
    mode: 'history',
    routes: routes
  })
  
  export default router;