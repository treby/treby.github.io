importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/4eb454f919933d1086fe.js",
    "revision": "2cb5d460d975aa66173051c6cceaacbd"
  },
  {
    "url": "/assets/702b19f1caea818f004d.js",
    "revision": "bb024a2033ab150869717873bf13b3c8"
  },
  {
    "url": "/assets/b138c23ba6309b160a6c.js",
    "revision": "8ec16af708f668c01e3f3640d34556ab"
  },
  {
    "url": "/assets/d35a7b4aea1f3b18faf0.js",
    "revision": "4077c1f40474f3f6ef20bc9dbf4f9679"
  },
  {
    "url": "/assets/e1f65f71309e52f5c48d.js",
    "revision": "2e6056b52237d450916c6ed1f1e91883"
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
