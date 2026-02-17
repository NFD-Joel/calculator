self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("nfd-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json"
      ]);
    })
  );
});
