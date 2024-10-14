const cacheName = "Ohm_kalkulačka";
const soubory = [
  "index.html",
  "styl.css",
  "script.js",
  "manifest.json",
  "ikona.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(soubory);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
