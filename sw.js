// Terminal du F : fonctionne hors connexion pour l'appli, toujours frais pour le briefing.
const CACHE = "terminal-f-v3";
const SHELL = ["./", "index.html", "firebase-config.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;   // données Binance : jamais en cache
  // Réseau d'abord (appli et briefing à jour), cache si hors connexion.
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok && !url.pathname.endsWith("market.json")) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
    if (r.ok && url.pathname.endsWith("market.json")) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put("market.json", copy)); }
    return r;
  }).catch(() => caches.match(url.pathname.endsWith("market.json") ? "market.json" : e.request).then((m) => m || caches.match("index.html"))));
});
