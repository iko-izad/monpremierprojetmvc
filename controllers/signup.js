// controllers/signup.js
module.exports = { // d'exporter des objets, des fonctions  d'un fichier afin qu'ils puissent être utilisés dans d'autres fichiers
    signupViews: (req, res) => { // C'est une méthode  définie dans l'objet exporté. Elle est nommée signupView, ce qui suggère qu'elle est utilisée pour gérer la vue "À signup"
        res.render('signup'); // Rendre la vue signup.ejs
   }
}
