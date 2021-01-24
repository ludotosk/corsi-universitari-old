workbox.setConfig({
    debug: false,
  });

  workbox.routing.registerRoute(
    new RegExp('https://json-server-corsi.herokuapp.com/'),
    workbox.strategies.networkFirst({
      cacheName: 'api',
    }),
  );