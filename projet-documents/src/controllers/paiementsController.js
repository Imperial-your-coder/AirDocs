const Paiement = require('../models/Paiement');

exports.createPayment = async (req, res) => {
  const payload = req.body;
  const result = await Paiement.create(payload);
  res.json({ ok: true, id: result.insertId });
};

exports.notifyPayment = async (req, res) => {
  // Webhook/notification placeholder
  res.json({ ok: true });
};
