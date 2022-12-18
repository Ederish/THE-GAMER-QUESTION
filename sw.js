//asignar un nombre y versión al cache
const CACHE_NAME = 'theGamerQuestions_v1',
  urlsToCache = [
    './','./sw.js',
    'index.html','juego.html',
    'grid.html','gameOver.html',
    './style.css','./script.js',
    './base-preguntas.json','./manifest.json',
    './img/Logo.png','./img/favicon.png',
    'https://unpkg.com/nes.css@2.3.0/css/nes.min.css',
    'https://unpkg.com/nes.css@latest/css/nes.min.css',
    'https://unpkg.com/nes.css/css/nes-core.min.css'
]
//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})
//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})
//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )})