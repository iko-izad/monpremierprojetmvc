// Importation du module HTTP de Node.js pour créer un serveur web
const http = require('http');

// Importation de l'application définie dans app.js (routes et logique)
const app = require('./app.js');

// Création du serveur HTTP en utilisant l'application app.js
const server = http.createServer(app);

// Définition du port sur lequel le serveur écoutera les connexions
const PORT = 3005;

// Démarrage du serveur et affichage d'un message de confirmation
server.listen(PORT, 'localhost', () => {
    console.log(" - Le serveur est activé au port :", PORT);
});
