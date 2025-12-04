-- schema.sql — simple schema placeholder

CREATE TABLE IF NOT EXISTS commandes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100),
  email VARCHAR(150),
  telephone VARCHAR(20),
  type_document VARCHAR(100),
  instructions TEXT,
  fichier VARCHAR(255),
  prix INT,
  statut ENUM('en_attente','en_traitement','pret','livre') DEFAULT 'en_attente',
  paiement_statut ENUM('non_payé','mobile','sur_place') DEFAULT 'non_payé',
  date_commande DATETIME
);

CREATE TABLE IF NOT EXISTS paiements (
  id INT AUTO_INCREMENT PRIMARY KEY,
  commande_id INT,
  montant INT,
  mode ENUM('mobile','sur_place'),
  transaction_id VARCHAR(100),
  statut ENUM('en_attente','réussi','échoué') DEFAULT 'en_attente',
  date_paiement DATETIME,
  FOREIGN KEY (commande_id) REFERENCES commandes(id)
);
