importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/5aa10aa.js",
    "revision": "cb8bd8dee64ece63b26f34c2755ebd95"
  },
  {
    "url": "/assets/5d74312.js",
    "revision": "822e496bf10fe88c3536f1bf4784e9d8"
  },
  {
    "url": "/assets/6c18038.js",
    "revision": "ee362c48ec15c00ac2b4e70664a1e4cf"
  },
  {
    "url": "/assets/e353fe4.js",
    "revision": "72a67822d814d36b394739fa7db3a051"
  },
  {
    "url": "/assets/fa13b37.js",
    "revision": "c5f1d2354f1a37d98564e10ff74e5e28"
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
