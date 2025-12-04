// controllers/payments.js
exports.create = async (req, res) => { res.json({ ok: true, message: 'create payment placeholder' }); };
exports.notify = async (req, res) => { res.json({ ok: true }); };
exports.get = async (req, res) => { res.json({ ok: true, payment: null }); };
