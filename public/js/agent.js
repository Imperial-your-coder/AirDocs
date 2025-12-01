// Script spécifique à l'interface agent
console.log('agent.js chargé');
async function fetchOrders(){
  const r = await fetch('/api/agent/list-orders.php');
  const data = await r.json();
  document.getElementById('orders').textContent = JSON.stringify(data);
}
fetchOrders();
