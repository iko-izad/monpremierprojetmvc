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


// Route pour afficher les programmes TV
app.get('/programmetv', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM programmediffusion', (err, results) => {
            if (err) throw err;

            // Affiche les résultats dans le terminal
            console.log(results);

            // Rendre la page avec les résultats
            res.render('programmetv', { programmes: results });
        });
    });
});

// Route pour afficher les programmes TV et le formulaire
app.get('/formulaireprogrammetv', (req, res) => {
    req.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM programmediffusion', (err, results) => {
            if (err) throw err;
            res.render('formulaireProgrammeTv', { programmes: results });
        });
    });
});

// Route pour traiter le formulaire et ajouter un programme TV
app.post('/ajouterProgrammetv', (req, res) => {
    const { nom_programme, date_diffusion, heure_diffusion, lien_video } = req.body;
    console.log(lien_video); // Vérifiez que le lien est bien reçu
    req.getConnection((err, connection) => {
        if (err) throw err;
        const query = 'INSERT INTO programmediffusion (nom_programme, date_diffusion, heure_diffusion, lien_video) VALUES (?, ?, ?, ?)';
        connection.query(query, [nom_programme, date_diffusion, heure_diffusion, lien_video], (err, results) => {
            if (err) throw err;
            res.redirect('/programmetv'); // Redirige vers la page des programmes TV
        });
    });
});

// Route pour afficher la page de connexion
app.get('/login', (req, res) => {
    res.render('login'); // Rendre la vue login.ejs
});

app.post('/login', (req, res) => {
    const { email, mot_de_passe } = req.body;

    // Vérifiez que les champs ne sont pas vides
    if (!email || !mot_de_passe) {
        return res.status(400).json({ message: 'Email et mot de passe sont requis.' });
    }

    req.getConnection((err, connection) => {
        if (err) {
            console.error('Erreur de connexion à la base de données:', err);
            return res.status(500).json({ message: 'Erreur de connexion à la base de données' });
        }

        const query = 'SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ?';
        connection.query(query, [email, mot_de_passe], (err, results) => {
            // Vérification des erreurs SQL
            if (err) {
                console.error('Erreur lors de la requête SQL:', err);
                return res.status(500).json({ message: 'Erreur lors de la requête SQL' });
            }

            // Vérification des résultats de la requête
            if (results.length === 0) {
                return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
            }

            // Authentification réussie
            res.redirect('/programmetv');
        });
    });
});

// Route pour afficher la page d'inscription
app.get('/signup', (req, res) => {
    res.render('signup'); // Rendre la vue signup.ejs
});

// Route pour traiter l'inscription
app.post('/signup', (req, res) => {
    const { nom, prenom, email, mot_de_passe, date_de_naissance } = req.body;

    req.getConnection((err, connection) => {
        if (err) {
            console.error('Erreur de connexion à la base de données:', err);
            return res.status(500).end('Erreur de connexion à la base de données');
        }

        const query = 'INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_de_naissance) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [nom, prenom, email, mot_de_passe, date_de_naissance], (err, results) => {
            if (err) {
                console.error('Erreur lors de l\'insertion:', err);
                return res.status(500).end('Erreur lors de l\'insertion');
            }

            // Redirigez vers la page de connexion ou une page de confirmation
            res.redirect('/login');
        });
    });
});

// Démarrer le serveur
app.listen(3007, () => {
    console.log("Serveur disponible sur http://localhost:3007");
});

module.exports = app;