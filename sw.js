importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/31af8c5f894e192a7c8a.js",
    "revision": "d8ef924eb7e58b8264a37676280b24ea"
  },
  {
    "url": "/assets/6495e0b713a01ef93ab5.js",
    "revision": "2587c71536cb15c17cb4c5fadd0facd9"
  },
  {
    "url": "/assets/b1fc48462f1d5fa7319b.js",
    "revision": "aa99a213407e741b32b24e6354ef1b17"
  },
  {
    "url": "/assets/c60a2b4e93a7fe793812.js",
    "revision": "a7a8d5bfeaf1b6a3e382fada6caaeeec"
  },
  {
    "url": "/assets/d3992c03a167db3cca2b.js",
    "revision": "2f63f58bb7ba72753b2e1b0158be8fd0"
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
