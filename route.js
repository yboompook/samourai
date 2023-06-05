const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/inscription', (req, res) => {
  const filePath = path.join(__dirname, 'html', 'formulaire_inscription.html');
  res.sendFile(filePath);
});

router.post('/inscription', soumettreFormulaireInscription); 

module.exports = router;