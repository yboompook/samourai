import express from 'express';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Configuration de Sequelize
const sequelize = new Sequelize(
  "samourai",
  "samourai",
  "samourai",
  {
    host: "localhost",
    dialect: 'mariadb',
    multipleStatements: true
  }
);

// Vérification de la connexion à la base de données
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');

    // Définir ici les routes de votre application Express

  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
})();

// Configuration d'Express
const app = express();
const port = 3000;
app.use(routes);
// Démarrage du serveur
app.listen(port, () => {
  console.log(`Le serveur est à l'écoute sur le port ${port}. et mdp ${process.env.DB_PASSWORD}`);
});
