module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/feedback','/cookie-policy', '/tabella', 'corsi-di-laurea'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


