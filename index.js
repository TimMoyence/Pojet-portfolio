const express = require("express");
const path = require("path");
const router = require("./router");

const app = express();

app.set("view engine", "ejs");
// on définit le fait que le dossier qui contient les vues est views
//       nom param      valeur du param
app.set("views", "views");

// require la data necessaire : 
// const articles = require("./data/articles");

// mettre a dispo la data :
// app.locals.**quelsdata = **nompour la recup;

app.use(express.static(path.join(__dirname, "./static")));
app.use(router);



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`projet site portfolio server is running on http://localhost:${PORT}`);
});
