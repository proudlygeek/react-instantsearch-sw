// self.addEventListener('install', function(event) {
//   event.waitUntil(init());
// });

importScripts('localforage.min.js');

console.log('LocalForage:', localforage);

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/static/js/bundle.js'
      ]);
    }
  ))
});

this.addEventListener('fetch', function(event) {
  if (event.request.method === 'POST') {
    console.log('POST:', event.request);
  }

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(r) {
        return caches.open('v1').then(function(cache) {
          // localforage.setItem(request.);

          cache.put(event.request,  r.clone());
          return r;
        });
      });
    }).catch(function() { console.log('no match'); })
  );
});