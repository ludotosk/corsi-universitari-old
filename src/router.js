import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ './home.vue')
const Panel = () => import(/* webpackChunkName: "panel" */'./panellink.vue')
const Corsi = () => import(/* webpackChunkName: "corsi" */ './corsi-di-laurea.vue')
const Contattami = () => import(/* webpackChunkName: "feedback" */ './contattami.vue')
const Cookiepolicy = () => import(/* webpackChunkName: "cookiepolicy" */ './cookie-policy.vue')
const Tabella = () => import(/* webpackChunkName: "tabella" */ './tabella.vue')
//const CorsiUnibo = () => import(/* webpackChunkName: "corsiUnibo" */ './uni/corsi-di-laurea-unibo.vue')
//const CorsiUnipi = () => import(/* webpackChunkName: "corsiUnipi" */ './uni/corsi-di-laurea-unipi.vue')
//const CorsiSapienza = () => import(/* webpackChunkName: "corsiSapienza" */ './uni/corsi-di-laurea-sapienza.vue')
//const CorsiUnipd = () => import(/* webpackChunkName: "corsiUnipd" */ './uni/corsi-di-laurea-unipd.vue')
//const CorsiBicocca = () => import(/* webpackChunkName: "corsiBicocca" */ './uni/corsi-di-laurea-bicocca.vue')
//const CorsiUniba = () => import(/* webpackChunkName: "corsiUniba" */ './uni/corsi-di-laurea-uniba.vue')
//const CorsiUnifi = () => import(/* webpackChunkName: "corsiUnifi" */ './uni/corsi-di-laurea-unifi.vue')
//const CorsiUnimi = () => import(/* webpackChunkName: "corsiUnimi" */ './uni/corsi-di-laurea-unimi.vue')
//const CorsiUnina = () => import(/* webpackChunkName: "corsiUnina" */ './uni/corsi-di-laurea-unina.vue')
//const CorsiUnipa = () => import(/* webpackChunkName: "corsiUnipa" */ './uni/corsi-di-laurea-unipa.vue')
//const CorsiUnisa = () => import(/* webpackChunkName: "corsiUnisa" */ './uni/corsi-di-laurea-unisa.vue')
//const CorsiUnito = () => import(/* webpackChunkName: "corsiUnito" */ './uni/corsi-di-laurea-unito.vue')
//const CorsiUnipr = () => import(/* webpackChunkName: "corsiUnipr" */ './uni/corsi-di-laurea-unipr.vue')
//const CorsiPolimi = () => import(/* webpackChunkName: "corsiPolimi" */ './uni/corsi-di-laurea-polimi.vue')
const ListaMagistrale = () => import(/* webpackChunkName: "ListaMagistrale" */ './liste/lista-corsi-di-laurea-magistrali.vue')
const ListaAccesso = () => import(/* webpackChunkName: "ListaAccesso" */ './liste/lista-corsi-di-laurea-triennali-ad-accesso-libero.vue')
const CorsiCiclo = () => import(/* webpackChunkName: "CorsiCiclo" */ './livello/corsi-di-laurea-magistrali-a-ciclo-unico.vue')
const Navbar = () => import(/* webpackChunkName: "Navbar" */ './Navbar.vue')
const Footer = () => import(/* webpackChunkName: "Footer" */ './Footer.vue')
//const CorsiMedicina = () => import(/* webpackChunkName: "corsimedicina" */ './area/corsi-di-laurea-medicina.vue')
//const CorsiPsicologia = () => import(/* webpackChunkName: "corsipsicologia" */ './area/corsi-di-laurea-psicologia.vue')
//const CorsiFisioterapia = () => import(/* webpackChunkName: "corsifisioterapia" */ './area/corsi-di-laurea-fisioterapia.vue')
//const CorsiStoria = () => import(/* webpackChunkName: "corsistoria" */ './area/corsi-di-laurea-storia.vue')
//const CorsiInfermieristica = () => import(/* webpackChunkName: "corsiinfermieristica" */ './area/corsi-di-laurea-infermieristica.vue')
//const CorsiMatematica = () => import(/* webpackChunkName: "corsimatematica" */ './area/corsi-di-laurea-matematica.vue')
//const CorsiFormazionePrimaria = () => import(/* webpackChunkName: "corsiformazioneprimaria" */ './area/corsi-di-laurea-scienze-della-formazione-primaria.vue')
//const CorsiBiologia = () => import(/* webpackChunkName: "corsibiologia" */ './area/corsi-di-laurea-biologia.vue')
//const CorsiFilosofia = () => import(/* webpackChunkName: "corsifilosofia" */ './area/corsi-di-laurea-filosofia.vue')
//const CorsiBiotecnologia = () => import(/* webpackChunkName: "corsibiotecnologie" */ './area/corsi-di-laurea-biotecnologia.vue')
//const CorsiDietistica = () => import(/* webpackChunkName: "corsidietistica" */ './area/corsi-di-laurea-dietistica.vue')
//const CorsiFarmacia = () => import(/* webpackChunkName: "corsifarmacia" */ './area/corsi-di-laurea-farmacia.vue')
//const CorsiGiurisprudenza = () => import(/* webpackChunkName: "corsigiurisprudenza" */ './area/corsi-di-laurea-giurisprudenza.vue')
//const CorsiInformatica = () => import(/* webpackChunkName: "corsiinformatica" */ './area/corsi-di-laurea-informatica.vue')
//const CorsiLettere = () => import(/* webpackChunkName: "corsilettere" */ './area/corsi-di-laurea-lettere.vue')
//const CorsiMotorie = () => import(/* webpackChunkName: "corsimotorie" */ './area/corsi-di-laurea-scienze-motorie.vue')
//const CorsiFisica = () => import(/* webpackChunkName: "corsifisica" */ './area/corsi-di-laurea-fisica.vue')
const Inglese = () => import(/* webpackChunkName: "inglese" */ './corsi-di-laurea-in-inglese.vue')
//const Guida = () => import(/* webpackChunkName: "guida" */ './guida.vue')
const Padova = () => import(/* webpackChunkName: "padova" */ './citta/corsi-di-laurea-padova.vue')
const Bologna = () => import(/* webpackChunkName: "bologna" */ './citta/corsi-di-laurea-bologna.vue')
const Firenze = () => import(/* webpackChunkName: "firenze" */ './citta/corsi-di-laurea-firenze.vue')
//const Genova = () => import(/* webpackChunkName: "genova" */ './citta/corsi-di-laurea-genova.vue')
const Milano = () => import(/* webpackChunkName: "Milano" */ './citta/corsi-di-laurea-milano.vue')
//const Pavia = () => import(/* webpackChunkName: "pavia" */ './citta/corsi-di-laurea-pavia.vue')
//const Venezia = () => import(/* webpackChunkName: "venezia" */ './citta/corsi-di-laurea-venezia.vue')
//const Verona = () => import(/* webpackChunkName: "verona" */ './citta/corsi-di-laurea-verona.vue')
//const CorsiKore = () => import(/* webpackChunkName: "kore" */ './uni/corsi-di-laurea-unikore.vue')
//const CorsiUnivda = () => import(/* webpackChunkName: "univda" */ './uni/corsi-di-laurea-univda.vue')
//const CorsiUnipegaso = () => import(/* webpackChunkName: "unipegaso" */ './uni/corsi-di-laurea-unipegaso.vue')
//const CorsiUnicusano = () => import(/* webpackChunkName: "unicusano" */ './uni/corsi-di-laurea-unicusano.vue')
//const CorsiEcampus = () => import(/* webpackChunkName: "ecampus" */ './uni/corsi-di-laurea-ecampus.vue')
//const CorsiMercatorum = () => import(/* webpackChunkName: "mercatorum" */ './uni/corsi-di-laurea-mercatorum.vue')
//const CorsiBocconi = () => import(/* webpackChunkName: "bocconi" */ './uni/corsi-di-laurea-bocconi.vue')
//const CorsiFederico = () => import(/* webpackChunkName: "federico" */ './uni/corsi-di-laurea-federico-ii.vue')
//const CorsiRomaTre = () => import(/* webpachChunkName: "romatre" */ './uni/corsi-di-laurea-roma-tre.vue')
//const CorsiTor = () => import(/* webpackChunkName: "tor" */ './uni/corsi-di-laurea-tor-vergata.vue')
//const CorsiUninettuno = () => import(/* webpackChunkName: "uninettuno" */ './uni/corsi-di-laurea-uninettuno.vue')
//const ListaMasterPrimo = () => import(/* webpackChunkName: "lista master primo" */ './liste/lista-master-di-primo-livello.vue')
//const ListaMasterSecondo = () => import(/* webpackChunkName: "lista master secondo" */ './liste/lista-master-di-secondo-livello.vue')
//const CorsiEconomia = () => import(/* webpackChunkName: "corsi economia" */ './area/corsi-di-laurea-economia.vue')
//const ListaPerfezionamentoAltaFormazione = () => import(/* webpackChunkName: "lista perfezionamento alta formazione" */ './liste/lista-perfezionamento-alta-formazione.vue')

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
      panel: Panel,
      footer: Footer
    }
  },
  /*   {
      path: '/corsi-di-laurea-unibo', components: {
        default: CorsiUnibo,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-unipi', components: {
       default: CorsiUnipi,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-sapienza', components: {
        default: CorsiSapienza,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, 
  {
    path: '/corsi-di-laurea-unipd', components: {
      default: CorsiUnipd,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },*/
  /*   {
      path: '/corsi-di-laurea-bicocca', components: {
        default: CorsiBicocca,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-polimi', components: {
        default: CorsiPolimi,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-uniba', components: {
        default: CorsiUniba,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-unibo', components: {
       default: CorsiUnibo,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-unifi', components: {
        default: CorsiUnifi,
        header: Navbar, CorsiMatematica
      }
    }, */
  /*   {
      path: '/corsi-di-laurea-unimi', components: {
        default: CorsiUnimi,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-unina', components: {
       default: CorsiUnina,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*  {
     path: '/corsi-di-laurea-unipa', components: {
       default: CorsiUnipa,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-unipr', components: {
        default: CorsiUnipr,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  //{
  //path: '/corsi-di-laurea-uniroma1', components: {
  //default: () => import(/* webpackChunkName: "corsiUniroma1" */ './uni/corsi-di-laurea-uniroma1.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  /*   {
      path: '/corsi-di-laurea-unisa', components: {
        default: CorsiUnisa,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /* {
    path: '/corsi-di-laurea-unito', components: {
      default: CorsiUnito,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  */
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
  //{
  //path: '/lista-corsi-di-laurea-magistrale-a-ciclo-unico', components: {
  //default: () => import(/* webpackChunkName: "ListaCiclo" */ './liste/lista-corsi-di-laurea-magistrali-ciclo-unico.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  //{
  //path: '/corsi-di-laurea-triennale', components: {
  //default: () => import(/* webpackChunkName: "CorsiTriennale" */ './livello/corsi-di-laurea-triennali.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  //{
  //path: '/corsi-di-laurea-magistrale', components: {
  //default: () => import(/* webpackChunkName: "CorsiMagistrale" */ './livello/corsi-di-laurea-magistrali.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  {
    path: '/corsi-di-laurea-magistrale-a-ciclo-unico', components: {
      default: CorsiCiclo,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  //{
  //path: '/corsi-di-laurea-triennali-ad-accesso-libero', components: {
  //default: () => import(/* webpackChunkName: "CorsiLiberi" */ './livello/corsi-di-laurea-triennali-accesso-libero.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  /* {
    path: '/corsi-di-laurea-medicina', components: {
      default: CorsiMedicina,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-psicologia', components: {
      default: CorsiPsicologia,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-fisioterapia', components: {
      default: CorsiFisioterapia,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  }, */
  /*   {
      path: '/corsi-di-laurea-storia', components: {
        default: CorsiStoria,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-infermieristica', components: {
        default: CorsiInfermieristica,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-matematica', components: {
        default: CorsiMatematica,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*   {
      path: '/corsi-di-laurea-scienze-della-formazione-primaria', components: {
        default: CorsiFormazionePrimaria,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-biologia', components: {
        default: CorsiBiologia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-filosofia', components: {
        default: CorsiFilosofia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-fisica', components: {
       default: CorsiFisica,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   },
   {
     path: '/corsi-di-laurea-biotecnologia', components: {
       default: CorsiBiotecnologia,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   },
   {
     path: '/corsi-di-laurea-dietistica', components: {
       default: CorsiDietistica,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-farmacia', components: {
        default: CorsiFarmacia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-giurisprudenza', components: {
       default: CorsiGiurisprudenza,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-informatica', components: {
        default: CorsiInformatica,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-lettere', components: {
       default: CorsiLettere,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  //{
  //path: '/corsi-di-laurea-logopedia', components: {
  //default: () => import(/* webpackChunkName: "corsilogopedia" */ './area/corsi-di-laurea-logopedia.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  /*{
    path: '/corsi-di-laurea-scienze-motorie', components: {
      default: CorsiMotorie,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  }, */
  //{
  //path: '/area-accademica-uni', components: {
  //default: () => import(/* webpackChunkName: "areaaccademica" */ './area-accademica-uni.vue'),
  //header: Navbar,
  //footer: Footer
  //}
  //},
  {
    path: '/corsi-di-laurea-in-inglese', components: {
      default: Inglese,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  /*   {
      path: '/guida', components: {
        default: Guida,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
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
  /*  {
     path: '/corsi-di-laurea-genova', components: {
       default: Genova,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
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
  }, /*
    {
      path: '/corsi-di-laurea-pavia', components: {
        default: Pavia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
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
  /*   {
      path: '/corsi-di-laurea-venezia', components: {
        default: Venezia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-verona', components: {
       default: Verona,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  //{
  //path: '/citta', components: {
  //default: () => import(/* webpackChunkName: "citta" */ './citta.vue'),
  //header: Navbar,
  //footer: Footer
  //}
  //},
  /* {
    path: '/corsi-di-laurea-unikore', components: {
      default: CorsiKore,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-univda', components: {
      default: CorsiUnivda,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unipegaso', components: {
      default: CorsiUnipegaso,
      header: Navbar,
      panel: Panel,
      footer: Footer
    }
  },
  {
    path: '/corsi-di-laurea-unicusano', components: {
      default: CorsiUnicusano,
      header: Navbar,
      panel: Panel,
      footer: Footer
    } 
  }, */
  /*   {
      path: '/corsi-di-laurea-ecampus', components: {
        default: CorsiEcampus,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*   {
      path: '/corsi-di-laurea-mercatorum', components: {
        default: CorsiMercatorum,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*   {
      path: '/corsi-di-laurea-bocconi', components: {
        default: CorsiBocconi,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-federico-ii', components: {
        default: CorsiFederico,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    },
    {
      path: '/corsi-di-laurea-roma-tre', components: {
        default: CorsiRomaTre,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*  {
     path: '/corsi-di-laurea-tor-vergata', components: {
       default: CorsiTor,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   },
   {
     path: '/corsi-di-laurea-uninettuno', components: {
       default: CorsiUninettuno,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  //{
  //path: '/master-primo-livello', components: {
  //default: () => import(/* webpackChunkName: "master primo" */ './master/master-primo-livello.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  //{
  //path: '/master-secondo-livello', components: {
  //default: () => import(/* webpackChunkName: "master secondo" */ './master/master-secondo-livello.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  /*  {
     path: '/lista-master-primo-livello', components: {
       default: ListaMasterPrimo,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   },
   {
     path: '/lista-master-secondo-livello', components: {
       default: ListaMasterSecondo,
       header: Navbar,
       panel: Panel,
       footer: Footer
     }
   }, */
  /*   {
      path: '/corsi-di-laurea-economia', components: {
        default: CorsiEconomia,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  /*   {
      path: '/lista-perfezionamento-alta-formazione', components: {
        default: ListaPerfezionamentoAltaFormazione,
        header: Navbar,
        panel: Panel,
        footer: Footer
      }
    }, */
  //{
  //path: '/perfezionamento-alta-formazione', components: {
  //default: () => import(/* webpackChunkName: "perfezionamento alta formazione" */ './master/perfezionamento-alta-formazione.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
  //{
  //path: '/corsi-di-laurea-senza-test', components: {
  //default: () => import(/* webpackChunkName: "corsi senza test" */ './no-test/corsi-di-laurea-senza-test.vue'),
  //header: Navbar,
  //panel: Panel,
  //footer: Footer
  //}
  //},
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
      default: () => import(/* webpackChunk : "migliori universita-italiane" */ './migliori-universita.vue'),
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