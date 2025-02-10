// controllers/formulaireProgrmmaTV.js
module.exports = { // d'exporter des objets, des fonctions  d'un fichier afin qu'ils puissent être utilisés dans d'autres fichiers
    formulaireProgrammetvViews: (req, res) => { // C'est une méthode  définie dans l'objet exporté. Elle est nommée aproposView, ce qui suggère qu'elle est utilisée pour gérer la vue "À propos"
        req.getConnection((err, connection) => {
            if (err) throw err;
            connection.query('SELECT * FROM programmediffusion', (err, results) => {
                if (err) throw err;
                res.render('formulaireProgrammeTv', { programmes: results });
            });
        });
    }
}