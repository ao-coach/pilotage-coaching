/* Service worker : rend l'application disponible hors ligne.
   Stratégie « réseau d'abord » : en ligne, on prend toujours la dernière version publiée ;
   hors ligne, on sert la copie gardée en cache. Aucune donnée personnelle ne passe ici. */
const CACHE = 'suivi-coaching-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); return res; })
            .catch(() => caches.match(r).then(m => m || caches.match('./index.html')))
  );
});