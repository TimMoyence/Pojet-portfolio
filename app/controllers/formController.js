const Contact = require("../models/contactForm");

const formController = {
  async contact(req, res) {
    const { name, email, message } = req.body;

    // Gestion d'erreur d'un champs vide géré en back (également en front avec bootstraps)
    if (!name || !email || !message) {
      return res.render("home", {
        error: "Un champs est resté vide",
      });
    }
    // Gestion d'un message deja posté par la même adresse mail (objectif eviter les robots)

    const contactExist = await Contact.findOne({
      where: {
        mail: email,
        message: message,
      },
    });
    if(contactExist){
        return res.render("home", {
          error: "Vous avez déjà publié ce message",
        });
    }

    await Contact.create({
      nom: name,
      mail: email,
      message: message,
    });
    res.redirect("/#scrollspyHeading5");
  },
};

module.exports = formController;
