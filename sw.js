const CACHE_NAME = 'pai-pro-v2';

// 1. Files to cache immediately on install (App Shell)
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/dexie/dist/dexie.js',
  'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2'
];

// Install Event: Pre-cache the UI
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

// Fetch Event: The "Smart AI Cache" Strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Special Handling for Hugging Face Models
  // We use a "Cache-First" strategy for models to ensure 100% offline use
  if (url.hostname === 'huggingface.co' || url.href.includes('.onnx')) {
    event.respondWith(
      caches.open('ai-models-cache').then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) return response; // Return from cache if found

          // Otherwise, fetch from network and save to cache
          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    // Standard Assets: Cache with Network Fallback
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
