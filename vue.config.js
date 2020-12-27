module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/', '/contattami', '/cookie-policy', '/tabella', '/corsi-di-laurea', '/corsi-di-laurea-unibo', '/corsi-di-laurea-unipi', '/corsi-di-laurea-bicocca', '/corsi-di-laurea-polimi', '/corsi-di-laurea-sapienza', '/corsi-di-laurea-uniba', '/corsi-di-laurea-unifi', '/corsi-di-laurea-unimi', '/corsi-di-laurea-unina', '/corsi-di-laurea-unipa', '/corsi-di-laurea-unipd', '/corsi-di-laurea-unipr', '/corsi-di-laurea-uniroma1', '/corsi-di-laurea-unisa', '/corsi-di-laurea-unito',  '/lista-corsi-di-laurea-triennale', '/lista-corsi-di-laurea-triennale-ad-accesso-libero',  '/lista-corsi-di-laurea-magistrale', '/lista-corsi-di-laurea-magistrale-a-ciclo-unico', '/corsi-di-laurea-triennale', '/corsi-di-laurea-triennali-ad-accesso-libero', '/corsi-di-laurea-magistrale-a-ciclo-unico', '/corsi-di-laurea-magistrale', '/universita'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}


