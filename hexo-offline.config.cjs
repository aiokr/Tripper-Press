// offline config passed to workbox-build.
module.exports = {
  globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}"],
  globDirectory: "public/",
  swDest: "/source/pwa/service-worker.js",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/imgur\.lzmun\.com\/.*/,
      handler: "CacheFirst"
    }
  ]
}