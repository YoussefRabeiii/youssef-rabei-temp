const youssefrabeiCache = "youssef-rabei-cache-v1";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/assets/youssefRabei.png",
  "/assets/github-brands.svg",
  "/assets/twitter-brands.svg",
  "/assets/favicon/favicon.ico",
  "/assets/facebook-brands.svg" ,
  "/assets/instagram-brands.svg" ,
  "/assets/favicon/favicon-16x16.png",
  "/assets/favicon/favicon-32x32.png",
  "/assets/favicon/apple-touch-icon.png",
  "/assets/favicon/android-chrome-192x192.png",
  "/assets/favicon/android-chrome-512x512.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(youssefrabeiCache).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});