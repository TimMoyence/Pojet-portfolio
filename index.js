require('dotenv').config();
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');
var httpsRedirect = require('express-https-redirect');
const express = require('express');
const app = express();
app.use('/', httpsRedirect());
const router = require('./app/router/router');
const errorMiddlewares = require("./middleware/errorHandlers.js");



if(process.env.NODE_ENV === 'development'){
    // En dev, pas besoin du certif
    app.listen(process.env.PORT, () => {
      console.log(`API Server started on http://localhost:${process.env.PORT}`);
    });
  
  } else if(process.env.NODE_ENV === 'production') {
    http.createServer(app).listen(80);
    // en prod, on fait un server sécurisé et on lit le certif avec les options, on passe 'app' en deuxième argument, c'est l'app express, et on démarre le serveur avec le .listen.
    https.createServer(
      // https certificate keys
      {
        key: fs.readFileSync(process.env.CERT_KEY),
        cert: fs.readFileSync(process.env.CERT_CERTIF),
        ca: fs.readFileSync(process.env.CERT_CA)
      },
      app
    ).listen(443, () => {
      console.log('Server started');
    });
  }

  app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: true }));

app.use(router);


app.use(errorMiddlewares.notFound);

app.use(errorMiddlewares.showErrors);