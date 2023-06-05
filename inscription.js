const { Joueur } = require('./models'); // Importer le modèle Joueur défini avec Sequelize

// Fonction pour traiter la soumission du formulaire d'inscription
async function soumettreFormulaireInscription(req, res) {
  try {
    // Récupérer les données du formulaire
    const { pseudo, prenom, description, mdp, isadmin, lvlforgeron, lvlcuisinier, forge, cuisine, mine, camp, champ, cariere, fer, bois, ingredient, pierre, gold } = req.body;

    // Créer un nouveau joueur dans la base de données
    const nouveauJoueur = await Joueur.create({
      pseudo,
      prenom,
      description,
      mdp,
      isadmin,
      lvlforgeron,
      lvlcuisinier,
      forge,
      cuisine,
      mine,
      camp,
      champ,
      cariere,
      fer,
      bois,
      ingredient,
      pierre,
      gold
    });

    // Répondre avec un message de succès
    res.status(200).json({ message: 'Le joueur a été enregistré avec succès.' });
  } catch (error) {
    // En cas d'erreur, répondre avec un message d'erreur
    res.status(500).json({ message: 'Une erreur est survenue lors de l\'enregistrement du joueur.' });
  }
}

module.exports = { soumettreFormulaireInscription };
