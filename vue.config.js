module.exports = {
  pwa: {
    themeColor: '#343a40',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      //cacheId: 'corsi-universitari',
      globDirectory: "dist/",
      globPatterns: [
        "**/*.{css,ico,html,js}"
      ],
      swSrc: "./src/service-worker.js",
      //runtimeCaching: [{
      //urlPattern: /https:\/\/json-server-corsi.herokuapp.com\/.(.*)/,
      //handler: 'StaleWhileRevalidate',
      //}]
    }
  },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/contattami',
        '/cookie-policy',
        '/tabella',
        '/tutti-i-corsi-di-laurea',
        /* '/corsi-di-laurea-unibo', */
        /* '/corsi-di-laurea-unipi', */
        '/corsi-di-laurea-bicocca',
        '/corsi-di-laurea-polimi',
        //'/corsi-di-laurea-sapienza',
        '/corsi-di-laurea-uniba',
        //'/corsi-di-laurea-unifi',
        //'/corsi-di-laurea-unimi',
        //'/corsi-di-laurea-unina',
        //'/corsi-di-laurea-unipa',
      /*   '/corsi-di-laurea-unipd', */
        //'/corsi-di-laurea-unipr',
        '/corsi-di-laurea-unisa',
        //'/corsi-di-laurea-unito',
        '/lauree-triennali-elenco',
        '/lista-corsi-di-laurea-triennale-ad-accesso-libero',
        '/lista-corsi-di-laurea-magistrale',
        '/corsi-di-laurea-magistrale-a-ciclo-unico',
        //'/corsi-di-laurea-scienze-motorie',
        '/corsi-di-laurea-logopedia',
        //'/corsi-di-laurea-lettere',
        '/corsi-di-laurea-informatica',
        //'/corsi-di-laurea-giurisprudenza',
        /* '/corsi-di-laurea-farmacia', */
        //'/corsi-di-laurea-dietistica',
        //'/corsi-di-laurea-biotecnologia',
        //'/corsi-di-laurea-fisica',
        '/corsi-di-laurea-filosofia',
        '/corsi-di-laurea-biologia',
        '/corsi-di-laurea-scienze-della-formazione-primaria',
        //'/corsi-di-laurea-matematica',
        //'/corsi-di-laurea-infermieristica',
        //'/corsi-di-laurea-storia',
        //'/corsi-di-laurea-fisioterapia',
        //'/corsi-di-laurea-psicologia',
        //'/corsi-di-laurea-medicina',
        '/corsi-di-laurea-in-inglese',
        /* '/corsi-di-laurea-bari', */
        '/corsi-di-laurea-bologna',
        '/corsi-di-laurea-firenze',
        /* '/corsi-di-laurea-genova', */
        '/corsi-di-laurea-milano',
        //'/corsi-di-laurea-napoli',
        '/corsi-di-laurea-padova',
        //'/corsi-di-laurea-pavia',
        //'/corsi-di-laurea-pisa',
        //'/corsi-di-laurea-roma',
        //'/corsi-di-laurea-torino',
        '/corsi-di-laurea-venezia',
        /* '/corsi-di-laurea-verona', */
        //'/corsi-di-laurea-unikore',
        //'/corsi-di-laurea-univda',
        //'/corsi-di-laurea-unipegaso',
        //'/corsi-di-laurea-unicusano',
        '/corsi-di-laurea-ecampus',
        /* '/corsi-di-laurea-mercatorum', */
        //'/corsi-di-laurea-bocconi',
        //'/corsi-di-laurea-roma-tre',
        //'/corsi-di-laurea-tor-vergata',
        //'/corsi-di-laurea-uninettuno',
        //'/corsi-di-laurea-federico-ii',
        '/corsi-di-laurea-in-inglese',
        '/lista-master-secondo-livello',
        '/lista-master-primo-livello',
        //'/corsi-di-laurea-economia',
        '/lista-perfezionamento-alta-formazione',
        '/lista-corsi-di-laurea-senza-test',
        '/corsi-di-laurea-online',
        '/corsi-di-laurea-internazionali',
        '/comunita'
      ],
      //headless: true,
      //onlyProduction: true,
      //useRenderEvent: true,
      renderAfterTime: 2000,
      headless: true,
      maxConcurrentRoutes: 32,
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8888/.netlify/functions/api'
      }
    }
  },
}