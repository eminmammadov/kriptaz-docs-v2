// Service Worker for Kriptaz Docs PWA
const CACHE_VERSION = Date.now(); // Dinamik versiyonlama
const CACHE_NAME = `kriptaz-docs-v${CACHE_VERSION}`;
const STATIC_CACHE_NAME = `kriptaz-docs-static-v${CACHE_VERSION}`;
const DYNAMIC_CACHE_NAME = `kriptaz-docs-dynamic-v${CACHE_VERSION}`;

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/logos/docs-logo-white.svg',
  '/fonts/kriptaz/Kriptaz-Regular-400.woff2',
  '/fonts/kriptaz/Kriptaz-Medium-500.woff2',
  '/fonts/kriptaz/Kriptaz-Bold-700.woff2',
  '/images/og-image.png'
];

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');

  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached');
        // Hemen aktif ol, beklemeden
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Cache failed', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Mevcut versiyondan farklı tüm cache'leri sil
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        // Tüm client'ları hemen kontrol et
        return self.clients.claim();
      })
      .then(() => {
        // Tüm client'lara yenileme mesajı gönder
        return self.clients.matchAll().then((clients) => {
          clients.forEach((client) => {
            client.postMessage({
              type: 'SW_UPDATED',
              message: 'Service Worker updated, please refresh'
            });
          });
        });
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle API requests differently
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Return cached API response if available
          return caches.match(request);
        })
    );
    return;
  }

  // Handle static files and pages - Network First Strategy
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Network başarılı, cache'e kaydet ve döndür
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then((cache) => {
              console.log('Service Worker: Caching new resource', request.url);
              cache.put(request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Network başarısız, cache'den dön
        console.log('Service Worker: Network failed, trying cache for', request.url);
        return caches.match(request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('Service Worker: Serving from cache', request.url);
              return cachedResponse;
            }

            // Cache'de de yok, offline page döndür
            if (request.destination === 'document') {
              return caches.match('/offline.html');
            }

            throw new Error('No cache available');
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline actions when back online
      handleBackgroundSync()
    );
  }
});

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Yeni məzmun mövcuddur',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Bax',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Bağla',
        icon: '/icons/xmark.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Kriptaz Docs', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked');

  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handler for update notifications
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Service Worker: Skipping waiting...');
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CHECK_FOR_UPDATES') {
    console.log('Service Worker: Checking for updates...');
    // Force update check
    self.registration.update();
  }
});

// Helper function for background sync
async function handleBackgroundSync() {
  try {
    // Handle any offline actions that were queued
    console.log('Service Worker: Handling background sync');
    
    // Example: Send queued search analytics
    const queuedActions = await getQueuedActions();
    for (const action of queuedActions) {
      await processAction(action);
    }
    
    await clearQueuedActions();
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Placeholder functions for offline queue management
async function getQueuedActions() {
  // Implementation would retrieve actions from IndexedDB
  return [];
}

async function processAction(action) {
  // Implementation would process the queued action
  console.log('Processing action:', action);
}

async function clearQueuedActions() {
  // Implementation would clear processed actions from IndexedDB
  console.log('Cleared queued actions');
}
