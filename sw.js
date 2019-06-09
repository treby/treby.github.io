importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/8b2d08a58b4b16960514.js",
    "revision": "2cec8c3bf6587d92a0f3c9812a105655"
  },
  {
    "url": "/_nuxt/a9d71ca46ae60fe752c1.js",
    "revision": "3b46f7a766e40db891715a890340d0cd"
  },
  {
    "url": "/_nuxt/b2d119c9e4e252f2562d.js",
    "revision": "b567683d0f2be610c72b8725688aa2b6"
  },
  {
    "url": "/_nuxt/b7bb624855393ebe5673.js",
    "revision": "fb74dd7a9af3b5616d4975b1a8dfdf7d"
  },
  {
    "url": "/_nuxt/be8df4fab6bcd94bdb9e.js",
    "revision": "047ab21b54c1a2c99e404e52bca17be3"
  }
], {
  "cacheId": "treby.github.io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
