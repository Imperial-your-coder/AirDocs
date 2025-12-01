const Commande = require('../models/Commande');

exports.createCommande = async (req, res) => {
  // TODO: validation
  const payload = req.body;
  const result = await Commande.create(payload);
  res.json({ ok: true, id: result.insertId });
};

exports.listCommandes = async (req, res) => {
  const rows = await Commande.list();
  res.json({ ok: true, commandes: rows });
};

exports.getCommande = async (req, res) => {
  const id = req.params.id;
  const row = await Commande.getById(id);
  res.json({ ok: true, commande: row });
};
