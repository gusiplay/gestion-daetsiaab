// Service worker mínimo: permite instalar la app. No cachea nada, así siempre se carga la última versión.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
