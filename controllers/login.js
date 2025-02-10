// controllers/login.js
module.exports = { // d'exporter des objets, des fonctions  d'un fichier afin qu'ils puissent être utilisés dans d'autres fichiers
    loginViews: (req, res) => { // C'est une méthode  définie dans l'objet exporté. Elle est nommée loginView, ce qui suggère qu'elle est utilisée pour gérer la vue "À login"
            res.render('login'); // Rendre la vue login.ejs
        }
    }
