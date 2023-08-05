require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const router = require('./app/router.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views'));

app.use(express.static('/public'));

app.use(router);

app.set('port', process.env.PORT || 3000);
app.set('base_url', process.env.BASE_URL + ':' + app.get('port'));

app.listen(app.get('port'), () => {
        console.log(`Listening on ${app.get('base_url')
    }`);
});
