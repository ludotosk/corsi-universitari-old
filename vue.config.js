module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/','/feedback'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
