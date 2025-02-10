/*
Dans ce fichier, nous créons des routes de la pages
*/

const express = require ('express'); // importe express.js et assigne
const signupController = require('../controllers/signup'); // ici  j'ai importe un controlleur appelé signupController depuis un fichier  dans le dossier controllers

const router = express.Router();

router.get('/', signupController.signupViews); // définit une route get pour le chemin de la racine ('/')

module.exports = router;