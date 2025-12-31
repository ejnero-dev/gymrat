// GymFlow Service Worker
// Version: 3.5.0 - Progress charts

const CACHE_NAME = 'gymflow-v14';
const urlsToCache = [
  '/gymrat/',
  '/gymrat/index.html',
  '/gymrat/manifest.json'
];

// Install Event - Cache assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('[Service Worker] Instalación completa');
        return self.skipWaiting(); // Activar inmediatamente
      })
      .catch((error) => {
        console.error('[Service Worker] Error en instalación:', error);
      })
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activando...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[Service Worker] Eliminando cache antiguo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[Service Worker] Activación completa');
        return self.clients.claim(); // Controlar todas las páginas inmediatamente
      })
  );
});

// Fetch Event - Cache First Strategy (perfecto para offline-first)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en cache, devolver de cache
        if (response) {
          console.log('[Service Worker] Sirviendo desde cache:', event.request.url);
          return response;
        }

        // Si no está en cache, hacer fetch de red
        console.log('[Service Worker] Fetching desde red:', event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Verificar respuesta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar respuesta (solo se puede leer una vez)
            const responseToCache = response.clone();

            // Guardar en cache para siguiente vez
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[Service Worker] Fetch falló:', error);

            // Si el fetch falla (offline), devolver página de offline si existe
            return caches.match('/offline.html')
              .then((offlinePage) => {
                if (offlinePage) {
                  return offlinePage;
                }
                // Si no hay página offline, devolver error genérico
                return new Response('Offline - Sin conexión a internet', {
                  status: 503,
                  statusText: 'Service Unavailable',
                  headers: new Headers({
                    'Content-Type': 'text/plain'
                  })
                });
              });
          });
      })
  );
});

// Background Sync (para sincronizar datos cuando vuelva la conexión)
self.addEventListener('sync', (event) => {
  console.log('[Service Worker] Background sync:', event.tag);

  if (event.tag === 'sync-workouts') {
    event.waitUntil(
      // Aquí iría la lógica de sincronización cuando implementes Supabase
      Promise.resolve()
        .then(() => {
          console.log('[Service Worker] Sincronización completada');
        })
    );
  }
});

// Push Notifications (para recordatorios de entreno)
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push recibido');

  const options = {
    body: event.data ? event.data.text() : '¡Hora de entrenar! 💪',
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'start',
        title: '🏋️ Comenzar'
      },
      {
        action: 'dismiss',
        title: 'Más tarde'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('GymFlow', options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  console.log('[Service Worker] Notificación clickeada:', event.action);

  event.notification.close();

  if (event.action === 'start') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[Service Worker] Service Worker cargado correctamente');
