// --- CONFIGURATION ---
const APP_VERSION = 'v1.5.0'; // <--- CHANGE THIS NUMBER TO UPDATE APP
const CACHE_NAME = `mrb-tools-${APP_VERSION}`;

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './icons.js',
  './metadata.js',
  './tools.js',
  './mrbtoolslogo.jpg'
];

// --- INSTALL: Cache Files ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// --- ACTIVATE: Clean up old caches ---
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// --- FETCH: Network first, fallback to cache ---
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith(self.location.origin)) return;
  event.respondWith(
    fetch(event.request).then((response) => {
      if (!response || response.status !== 200 || response.type !== 'basic') return response;
      const responseToCache = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
      return response;
    }).catch(() => caches.match(event.request))
  );
});
