// JS général: upload basique et appels API
console.log('app.js chargé');

async function uploadFile(file) {
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch('/api/documents/upload.php', { method: 'POST', body: fd });
  return res.json();
}
