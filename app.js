const express = require("express");
const mysql2 = require("mysql2");
const myConnection = require("express-myconnection");

// Configuration des options de connexion à la base de données
const optionConnection = {
    host: "localhost",
    user: "root",
    password: "Izad97640",
    port: 3306,
    database: "chainetv"
};

// Création de l'application Express
const app = express();

// Configuration des vues et du moteur de rendu
app.set("views", "./views");
app.set('view engine', 'ejs');

// Middleware pour servir des fichiers statiques
app.use(express.static("public"));

// Middleware pour établir une connexion à la base de données
app.use(myConnection(mysql2, optionConnection, "pool"));

// Middleware pour analyser les données des formulaires
app.use(express.urlencoded({ extended: true }));

// Route pour afficher les membres de l'équipe
app.get('/apropos', (req, res) => {
    req.getConnection((err, connection) => { //  récupère une connexion à la base de données.
        if (err) throw err;
        connection.query('SELECT * FROM equipe', (err, results) => { // exécute une requête SQL pour récupérer tous les membres de l'équipe depuis la table equipe.
            if (err) throw err;
            res.render('apropos', { membres: results }); // va génère la page apropos.ejs (ou autre moteur de template) en envoyant les données (membres).
        });
    });
});


// Route pour afficher le programme TV
app.get('/programmetv', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw err;
    connection.query('SELECT * FROM programmediffusion', (err, results) => { // Affiche les programmes télévisés en récupérant toutes les données de la table programmediffusion.
        if (err) throw err;
        res.render('programmetv', { programmes: results });
    });
});
});

// Démarrer le serveur
app.listen(3006, () => {
    console.log("Serveur disponible sur http://localhost:3006");
});

module.exports = app;