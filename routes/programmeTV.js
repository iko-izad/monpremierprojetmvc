/*
Dans ce fichier, nous créons des routes de la pages
*/

const express = require ('express'); // importe express.js et assigne
const programmetvController = require('../controllers/programmeTV'); // ici  j'ai importe un controlleur appelé progrmmetvController depuis un fichier  dans le dossier controllers

const router = express.Router();

router.get('/', programmetvController.programmetvViews); // définit une route get pour le chemin de la racine ('/')

module.exports = router;