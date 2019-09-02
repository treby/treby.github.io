importScripts('/assets/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/672a4cf01f16dbcce4c8.js",
    "revision": "3160f44affd7428d9d372821889c3907"
  },
  {
    "url": "/assets/73cd209f598fdbb64eb4.js",
    "revision": "c7d26b6c38d3739d57fbf782b4785159"
  },
  {
    "url": "/assets/ad9c87ba6a749e5fdc91.js",
    "revision": "1e9df5d86056ee6e1f64964b12988af9"
  },
  {
    "url": "/assets/d09bb2d6e43f3989c271.js",
    "revision": "8d18678faed31ecd1e02a44a0c87ff9a"
  },
  {
    "url": "/assets/fcd4899942a32940b3c0.js",
    "revision": "5199a8bb28408bb760cb92384e555eb0"
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
