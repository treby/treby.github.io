importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/25b0236390c24ed43530.js",
    "revision": "f8c652a05cf2b39978681bfcf10de3f8"
  },
  {
    "url": "/_nuxt/5f13649f979fc3bba387.js",
    "revision": "dc9bd941a1b9d352c03813534d925811"
  },
  {
    "url": "/_nuxt/84d9cbbf0dfec63031fe.js",
    "revision": "204c5b0770a1ef1efc9ab2b11eed7311"
  },
  {
    "url": "/_nuxt/a6bebe6c713168a02dd5.js",
    "revision": "4d85e981df58d5047ae605d61c3d502e"
  },
  {
    "url": "/_nuxt/e2e9bbfab7d5d8b6e7e7.js",
    "revision": "e993d19d43009f2cd078cbe6549117c5"
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
