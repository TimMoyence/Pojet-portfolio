require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const router = require('./app/router/router');
const errorMiddlewares = require("./middleware/errorHandlers.js");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: true }));

app.use(router);


app.use(errorMiddlewares.notFound);

app.use(errorMiddlewares.showErrors);

app.set('port', process.env.PORT || 3000);
app.set('base_url', process.env.BASE_URL + ':' + app.get('port'));

app.listen(app.get('port'), () => {
        console.log(`Listening on ${app.get('base_url')
    }`);
});
