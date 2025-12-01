// Service worker minimal pour push
self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'Nouvelle notification AirDocs';
  event.waitUntil(self.registration.showNotification('AirDocs', { body: data }));
});
