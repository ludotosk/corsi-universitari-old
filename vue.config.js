module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/contattami','/cookie-policy', '/tabella', '/corsi-di-laurea', '/lista-corsi-di-laurea-triennali', '/lista-corsi-di-laurea-magistrali', '/lista-corsi-di-laurea-magistrali-a-ciclo-unico', '/lista-corsi-di-laurea-triennali-ad-accesso-libero', '/corsi-di-laurea-unibo', '/corsi-di-laurea-unipi'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


