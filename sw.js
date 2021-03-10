const staticDevCalc = "dev-calc-site-v1"
const assets = [
  "/",
  "/index.html",
  "/materialize.css",
  "/app.js",
  "/picture1.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCalc).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })