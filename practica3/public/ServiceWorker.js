
const CACHE_NAME = "book-search-cache-v1";
const urlsToCache = [
  "/", 
  "/index.html",
  "/static/css/main.css", 
  "/static/js/main.js",
];
let recentSearches = []; // Array para almacenar las búsquedas recientes

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Abriendo caché");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Eliminando caché antigua:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "ADD_RECENT_SEARCH") {
    const search = event.data.payload;
    if (!recentSearches.includes(search)) {
      recentSearches = [search, ...recentSearches.slice(0, 4)];
    }
  }

  if (event.data && event.data.type === "GET_RECENT_SEARCHES") {
    event.ports[0].postMessage(recentSearches);
  }
});
