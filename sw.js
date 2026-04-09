// LifeTracker Service Worker - v2 (Fixed caching)
const CACHE = 'lifetracker-v2';

const STATIC_ASSETS = [
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
];

// Install: cache static assets only
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network-first strategy for HTML, cache-first for static assets
self.addEventListener('fetch', e => {
  // Skip non-GET and chrome-extension requests
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;

  const url = new URL(e.request.url);
  
  // Network-first for HTML and main app files
  if (e.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request).then(response => {
        // Cache fresh copy of HTML
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => {
        // Fallback to cached HTML if offline
        return caches.match(e.request).then(cached => {
          return cached || caches.match('./index.html');
        });
      })
    );
    return;
  }

  // Cache-first for static assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) {
        // Check if asset is still fresh (less than 1 hour old)
        const dateHeader = cached.headers.get('date');
        if (dateHeader) {
          const cacheTime = new Date(dateHeader).getTime();
          const now = Date.now();
          if (now - cacheTime < 3600000) { // 1 hour
            return cached;
          }
        }
      }
      
      // Fetch from network and cache
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached); // Fallback to cached if network fails
    })
  );
});
