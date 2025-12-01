const pool = require('../../config/db');

module.exports = {
  async create(data){
    const sql = `INSERT INTO commandes (nom,email,telephone,type_document,instructions,fichier,prix,statut,paiement_statut,date_commande) VALUES (?,?,?,?,?,?,?,?,?,NOW())`;
    const params = [data.nom, data.email, data.telephone, data.type_document, data.instructions || null, data.fichier || null, data.prix || 0, data.statut || 'en_attente', data.paiement_statut || 'non_payé'];
    const [result] = await pool.execute(sql, params);
    return result;
  },
  async list(){
    const [rows] = await pool.query('SELECT * FROM commandes ORDER BY date_commande DESC');
    return rows;
  },
  async getById(id){
    const [rows] = await pool.execute('SELECT * FROM commandes WHERE id = ?', [id]);
    return rows[0] || null;
  }
};
