module.exports = {
  pwa: {
    themeColor: '#343a40',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      globDirectory: "dist/",
      globPatterns: [
        "**/*.{css,ico,html,js}"
      ],
      swSrc: "./src/service-worker.js",
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
        '/migliori-universita-medicina',
        '/lauree-triennali-elenco',
        '/lista-corsi-di-laurea-magistrale',
        '/corsi-di-laurea-magistrale-a-ciclo-unico',
        '/corsi-di-laurea-in-inglese',
        '/corsi-di-laurea-bari',
        '/corsi-di-laurea-bologna',
        '/corsi-di-laurea-firenze',
        '/corsi-di-laurea-milano',
        '/corsi-di-laurea-napoli',
        '/corsi-di-laurea-padova',
        '/corsi-di-laurea-pisa',
        '/corsi-di-laurea-roma',
        '/corsi-di-laurea-torino',
        '/corsi-di-laurea-in-inglese',
        '/lista-corsi-di-laurea-senza-test',
        '/corsi-di-laurea-online',
        '/corsi-di-laurea-internazionali',
        '/comunita',
        '/migliori-corsi-di-laurea',
        '/migliori-universita-italiane',
        '/corsi-di-laurea-palermo'
      ],
      renderAfterTime: 2000,
      headless: true,
      maxConcurrentRoutes: 32,
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://json-corsi-fastify.herokuapp.com/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { "^/api": "/" }
      },
    }
  },
}