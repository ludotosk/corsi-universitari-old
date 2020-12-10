module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/feedback','/cookie-policy'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


