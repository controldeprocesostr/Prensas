const CACHE_NAME = "erp-recetas-cache-v1";
const urlsToCache = [
  "./RECETAS.html",
  "./ERP_PRENSAS_ALUTIONS.html",
  "./manifest_recetas.json",
  "./icon-192.png",
  "./icon-512.png"
];

// 📦 Instalar
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

// 🧹 Activar
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)))
    )
  );
});

// 🌐 Interceptar peticiones
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
