// controllers/agents.js
exports.list = async (req, res) => { res.json({ ok: true, agents: [] }); };
exports.get = async (req, res) => { res.json({ ok: true, agent: null }); };
exports.update = async (req, res) => { res.json({ ok: true }); };
