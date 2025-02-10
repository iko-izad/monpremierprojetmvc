// controllers/apropos.js
module.exports = { // d'exporter des objets, des fonctions  d'un fichier afin qu'ils puissent être utilisés dans d'autres fichiers
    aproposViews: (req, res) => { // C'est une méthode  définie dans l'objet exporté. Elle est nommée aproposView, ce qui suggère qu'elle est utilisée pour gérer la vue "À propos"
        req.getConnection((err, connection) => { //  récupère une connexion à la base de données.
            if (err) throw err;
            connection.query('SELECT * FROM equipe', (err, results) => { // exécute une requête SQL pour récupérer tous les membres de l'équipe depuis la table equipe.
                if (err) throw err;
                res.render('apropos', { membres: results }); // va génère la page apropos.ejs (ou autre moteur de template) en envoyant les données (membres).
            });
        });
    }
};