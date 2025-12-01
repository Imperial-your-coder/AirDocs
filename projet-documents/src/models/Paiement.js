const pool = require('../../config/db');

module.exports = {
  async create(data){
    const sql = `INSERT INTO paiements (commande_id,montant,mode,transaction_id,statut,date_paiement) VALUES (?,?,?,?,?,NOW())`;
    const params = [data.commande_id, data.montant, data.mode || 'sur_place', data.transaction_id || null, data.statut || 'en_attente'];
    const [result] = await pool.execute(sql, params);
    return result;
  }
};
