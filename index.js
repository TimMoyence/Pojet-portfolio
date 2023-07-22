const express = require("express");
const path = require("path");
const router = require("./router");

const app = express();

app.set("view engine", "ejs");
// on définit le fait que le dossier qui contient les vues est views
//     nom param  valeur du param
app.set("views", "views");

const experience = require("./data/experience");
const skills = require("./data/skills");
const savoirEtre = require("./data/savoirEtre");
const formation = require("./data/formation");

app.locals.experience = experience;
app.locals.skills = skills;
app.locals.savoirEtre = savoirEtre;
app.locals.formation = formation;

app.use(express.static(path.join(__dirname, "./static")));
app.use(router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `projet site portfolio server is running on http://localhost:${PORT}`
  );
});
