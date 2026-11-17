const CACHE_NAME = "sakloloph-v8";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

// Install and save the app files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

// Remove old versions of the cache
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name =>
                        name.startsWith("sakloloph-") &&
                        name !== CACHE_NAME
                    )
                    .map(name => caches.delete(name))
            );
        })
    );

    self.clients.claim();
});

// Load saved files when offline
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    const requestURL = new URL(event.request.url);

    if (requestURL.origin !== self.location.origin) return;

    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const copy = response.clone();

                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, copy);
                    });

                    return response;
                })
                .catch(async () => {
                    return await caches.match(event.request) ||
                           await caches.match("./index.html");
                })
        );
    } else {
        event.respondWith(
            caches.match(event.request).then(cachedFile => {
                return cachedFile || fetch(event.request);
            })
        );
    }
});