const CACHE_NAME = 'my_app-cache-v1';

const URLS = ['/', '/items', '/about']

self.addEventListener('install', (event) => {
    console.log('install')
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW: opened cache]');
                return cache.addAll(URLS);
            })
            .catch((err) => {
                console.log('[SW: opened error]', err);
                throw err;
            })
    )
})

self.addEventListener('activate', (event) => {
    console.log('activate')
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request).then((response) => {
                const responseToCache = response.clone();
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                    return response;
                });
            });
        })
    );
})