const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
      '/',
      '/contattami',
      '/cookie-policy',
      '/tabella',
      '/tutti-i-corsi-di-laurea',
      '/corsi-di-laurea-unibo',
      '/corsi-di-laurea-unipi',
      '/corsi-di-laurea-bicocca',
      '/corsi-di-laurea-polimi',
      '/corsi-di-laurea-sapienza',
      '/corsi-di-laurea-uniba',
      '/corsi-di-laurea-unifi',
      '/corsi-di-laurea-unimi',
      '/corsi-di-laurea-unina',
      '/corsi-di-laurea-unipa',
      '/corsi-di-laurea-unipd',
      '/corsi-di-laurea-unipr',
      '/corsi-di-laurea-uniroma1',
      '/corsi-di-laurea-unisa',
      '/corsi-di-laurea-unito',
      '/lista-corsi-di-laurea-triennale',
      '/lista-corsi-di-laurea-triennale-ad-accesso-libero',
      '/lista-corsi-di-laurea-magistrale',
      '/lista-corsi-di-laurea-magistrale-a-ciclo-unico',
      '/corsi-di-laurea-triennale',
      '/corsi-di-laurea-triennali-ad-accesso-libero',
      '/corsi-di-laurea-magistrale-a-ciclo-unico',
      '/corsi-di-laurea-magistrale',
      '/universita',
      '/area-accademica',
      '/corsi-di-laurea-scienze-motorie',
      '/corsi-di-laurea-logopedia',
      '/corsi-di-laurea-lettere',
      '/corsi-di-laurea-informatica',
      '/corsi-di-laurea-giurisprudenza',
      '/corsi-di-laurea-farmacia',
      '/corsi-di-laurea-dietistica',
      '/corsi-di-laurea-biotecnologia',
      '/corsi-di-laurea-fisica',
      '/corsi-di-laurea-filosofia',
      '/corsi-di-laurea-biologia',
      '/corsi-di-laurea-scienze-della-formazione-primaria',
      '/corsi-di-laurea-matematica',
      '/corsi-di-laurea-infermieristica',
      '/corsi-di-laurea-storia',
      '/corsi-di-laurea-fisioterapia',
      '/corsi-di-laurea-psicologia',
      '/corsi-di-laurea-medicina',
      '/corsi-di-laurea-in-inglese',
      '/guida',
      '/citta',
      '/corsi-di-laurea-bari',
      '/corsi-di-laurea-bologna',
      '/corsi-di-laurea-firenze',
      '/corsi-di-laurea-genova',
      '/corsi-di-laurea-milano',
      '/corsi-di-laurea-napoli',
      '/corsi-di-laurea-padova',
      '/corsi-di-laurea-pavia',
      '/corsi-di-laurea-pisa',
      '/corsi-di-laurea-roma',
      '/corsi-di-laurea-torino',
      '/corsi-di-laurea-venezia',
      '/corsi-di-laurea-verona',
      '/corsi-di-laurea-unikore',
      '/corsi-di-laurea-univda',
      '/corsi-di-laurea-unipegaso',
      '/corsi-di-laurea-unicusano',
      '/corsi-di-laurea-ecampus',
      '/corsi-di-laurea-mercatorum',
      '/corsi-di-laurea-bocconi',
      '/corsi-di-laurea-roma-tre',
      '/corsi-di-laurea-tor-vergata',
      '/corsi-di-laurea-uninettuno',
      '/corsi-di-laurea-federico-ii',
      '/corsi-di-laurea-in-inglese'
    ],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      // We need to inject a value so we're able to
      // detect if the page is currently pre-rendered.
      inject: {},
      // Our view component is rendered after the API
      // request has fetched all the necessary data,
      // so we create a snapshot of the page after the
      // `data-view` attribute exists in the DOM.
      //renderAfterElementExists: '[data-view]',
      renderAfterTime: 2000,
      headless: true,
      maxConcurrentRoutes: 32
    }),
  }),
];

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
  },
  pwa: {
    themeColor: '#343a40',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    //workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      cacheId: 'https://json-server-corsi.herokuapp.com/',
      globDirectory: "dist/",
      globPatterns: [
        "**/*.{css,ico,html,js}"
      ],
      runtimeCaching: [{
        urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
        handler: 'StaleWhileRevalidate'
      }]
    }
  },
};



/*
module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/contattami',
        '/cookie-policy',
        '/tabella',
        '/tutti-i-corsi-di-laurea',
        '/corsi-di-laurea-unibo',
        '/corsi-di-laurea-unipi',
        '/corsi-di-laurea-bicocca',
        '/corsi-di-laurea-polimi',
        '/corsi-di-laurea-sapienza',
        '/corsi-di-laurea-uniba',
        '/corsi-di-laurea-unifi',
        '/corsi-di-laurea-unimi',
        '/corsi-di-laurea-unina',
        '/corsi-di-laurea-unipa',
        '/corsi-di-laurea-unipd',
        '/corsi-di-laurea-unipr',
        '/corsi-di-laurea-uniroma1',
        '/corsi-di-laurea-unisa',
        '/corsi-di-laurea-unito',
        '/lista-corsi-di-laurea-triennale',
        '/lista-corsi-di-laurea-triennale-ad-accesso-libero',
        '/lista-corsi-di-laurea-magistrale',
        '/lista-corsi-di-laurea-magistrale-a-ciclo-unico',
        '/corsi-di-laurea-triennale',
        '/corsi-di-laurea-triennali-ad-accesso-libero',
        '/corsi-di-laurea-magistrale-a-ciclo-unico',
        '/corsi-di-laurea-magistrale',
        '/universita',
        '/area-accademica',
        '/corsi-di-laurea-scienze-motorie',
        '/corsi-di-laurea-logopedia',
        '/corsi-di-laurea-lettere',
        '/corsi-di-laurea-informatica',
        '/corsi-di-laurea-giurisprudenza',
        '/corsi-di-laurea-farmacia',
        '/corsi-di-laurea-dietistica',
        '/corsi-di-laurea-biotecnologia',
        '/corsi-di-laurea-fisica',
        '/corsi-di-laurea-filosofia',
        '/corsi-di-laurea-biologia',
        '/corsi-di-laurea-scienze-della-formazione-primaria',
        '/corsi-di-laurea-matematica',
        '/corsi-di-laurea-infermieristica',
        '/corsi-di-laurea-storia',
        '/corsi-di-laurea-fisioterapia',
        '/corsi-di-laurea-psicologia',
        '/corsi-di-laurea-medicina',
        '/corsi-di-laurea-in-inglese',
        '/guida',
        '/citta',
        '/corsi-di-laurea-bari',
        '/corsi-di-laurea-bologna',
        '/corsi-di-laurea-firenze',
        '/corsi-di-laurea-genova',
        '/corsi-di-laurea-milano',
        '/corsi-di-laurea-napoli',
        '/corsi-di-laurea-padova',
        '/corsi-di-laurea-pavia',
        '/corsi-di-laurea-pisa',
        '/corsi-di-laurea-roma',
        '/corsi-di-laurea-torino',
        '/corsi-di-laurea-venezia',
        '/corsi-di-laurea-verona',
        '/corsi-di-laurea-unikore',
        '/corsi-di-laurea-univda',
        '/corsi-di-laurea-unipegaso',
        '/corsi-di-laurea-unicusano',
        '/corsi-di-laurea-ecampus',
        '/corsi-di-laurea-mercatorum',
        '/corsi-di-laurea-bocconi',
        '/corsi-di-laurea-roma-tre',
        '/corsi-di-laurea-tor-vergata',
        '/corsi-di-laurea-uninettuno',
        '/corsi-di-laurea-federico-ii'
      ],
      //headless: true,
      //onlyProduction: true,
      //useRenderEvent: true,
    }
  }
}

 */