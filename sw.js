const CACHE_NAME = 'STORIES_CACHE_v1';
// service worker
// install descargar y guardaree archivos
// activate eliminar archoivos o guardar nuevos
// fetch retornar del repositorio de archivos

self.addEventListener('install', function() {
  // guardar archivos iniciales
  caches.open(CACHE_NAME).then(function(cache) {
    cache.addAll(['/index.html', '/dist/javascript/bundle.js']);
  });
});

self.addEventListener('activate', function(ev) {
  ev.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.map(cacheName => {
          if(CACHE_NAME !== cacheName) caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(ev) {
  console.log(ev.request);
  ev.respondWith(
    //caches.match(ev.request)
    caches.match(ev.request).then(function(response) {
      console.log(response);
      return response || fetch(ev.request);
    })
  );
});
