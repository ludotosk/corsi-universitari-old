module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/feedback','/cookie-policy', '/tabella'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


