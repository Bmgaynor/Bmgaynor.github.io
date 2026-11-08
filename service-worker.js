// Self-removing service worker.
//
// The 2022 Create React App build installed a Workbox worker here that
// answered every navigation on bradgaynor.com with the cached homepage, which
// broke project sites like /hook-local-storage/ and /bivy-app/ for returning
// visitors. Browsers re-check this file on their next visit, install this
// version, and it removes itself: deletes the Workbox caches, unregisters, and
// reloads open tabs so they get the real pages. The current site never
// registers a worker, so nothing reinstalls it.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const windows = await self.clients.matchAll({ type: "window" });
      for (const client of windows) client.navigate(client.url);
    })(),
  );
});
