const CACHE_NAME="facturas-sri-v2-items";
const FILES=["./","./index.html","./manifest.json","./icon.svg","./README.md"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(FILES)));self.skipWaiting();});
self.addEventListener("activate",event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim();});
self.addEventListener("fetch",event=>{event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)))});
