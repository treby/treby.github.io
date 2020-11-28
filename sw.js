importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/00f445a.js",
    "revision": "8d26bf131e2a720b64fef1f4749db3cd"
  },
  {
    "url": "/assets/27841d6.js",
    "revision": "8cd9e912311d2f9d573eb870ce6121b4"
  },
  {
    "url": "/assets/6b29a69.js",
    "revision": "61ef48a2527c918c8f142f8bc0ef5b41"
  },
  {
    "url": "/assets/6c18038.js",
    "revision": "ee362c48ec15c00ac2b4e70664a1e4cf"
  },
  {
    "url": "/assets/e353fe4.js",
    "revision": "72a67822d814d36b394739fa7db3a051"
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
