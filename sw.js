self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/quiz-app/',
        '/quiz-app/index.html',
        '/quiz-app/scripts.js',
        '/quiz-app/style.css',
        '/quiz-app/images/favicon.png',
        '/quiz-app/images/favicon2.png',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });