module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{html,css,ico,png,svg,js,json,txt}"
  ],
  swDest: "dist/sw.js",
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|json)$/,
    handler: 'StaleWhileRevalidate'
  }]
};