/*
Dans ce fichier, nous créons des routes de la pages
*/

const express = require ('express'); // importe express.js et assigne
const aproposController = require('../controllers/apropos'); // ici  j'ai importe un controlleur appelé aproposController depuis un fichier  dans le dossier controllers

const router = express.Router();

router.get('/', aproposController.aproposViews); // définit une route get pour le chemin de la racine ('/')

module.exports = router;
