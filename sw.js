importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/1f49165f8ba7c58743dd.js",
    "revision": "c967c8a0e383016fbcfcacbcd522ab6e"
  },
  {
    "url": "/assets/6548bd30e11e583b4dc4.js",
    "revision": "4697ad9a37945bca1414b4f087b4c739"
  },
  {
    "url": "/assets/a9d71ca46ae60fe752c1.js",
    "revision": "3b46f7a766e40db891715a890340d0cd"
  },
  {
    "url": "/assets/b2d119c9e4e252f2562d.js",
    "revision": "b567683d0f2be610c72b8725688aa2b6"
  },
  {
    "url": "/assets/be8df4fab6bcd94bdb9e.js",
    "revision": "047ab21b54c1a2c99e404e52bca17be3"
  }
], {
  "cacheId": "treby.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
