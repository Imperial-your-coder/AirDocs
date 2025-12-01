// Placeholder for mobile money integrations (Orange, M-Pesa, etc.)
module.exports = {
  async initiatePayment(data){
    // integrate provider API
    return { ok: true, provider: 'mock', transaction_id: null };
  }
};
