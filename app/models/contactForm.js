const { DataTypes, Model } = require("sequelize");
const client = require("../database");

// on fait hériter notre nouvelle classe de Model
class Contact extends Model {}

// on définit notre classe
Contact.init(
  {
    nom: DataTypes.TEXT,
    mail: DataTypes.TEXT,
    message: DataTypes.TEXT,
  },
  {
    sequelize: client,
    tableName: "contact",
  }
);

module.exports = Contact;
