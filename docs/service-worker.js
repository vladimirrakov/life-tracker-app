// Name of the cache storage for this version of the app
const CACHE_NAME = "life-tracker-cache-v1";

// List of files to cache for offline use
const urlsToCache = [
  "index.html",
  "style.css",
  "app.js",
  "manifest.json",
  // Add more assets if needed
];

// Install event: cache all specified assets when the service worker is installed
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch event: serve cached assets if available, otherwise fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found, else fetch from network
      return response || fetch(event.request);
    })
  );
});

// Activate event: remove old caches that don't match the current cache name
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          // Delete caches that are not the current version
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});