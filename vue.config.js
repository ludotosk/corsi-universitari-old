module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/contattami','/cookie-policy', '/tabella', '/corsi-di-laurea', '/lista-corsi-di-laurea-triennali'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


