// Variables d'environnement par défaut — utiliser un .env en production
module.exports = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',
  DB_NAME: process.env.DB_NAME || 'projet_documents',
  // Clés API pour mobile money si nécessaire
  MOBILE_MONEY_KEY: process.env.MOBILE_MONEY_KEY || ''
};
