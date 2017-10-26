const port = process.env.PORT || 8080;
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const fs = require('fs');
const index = require('./routes/index');
const users = require('./routes/users');
const checkkill = require('./routes/checkkill');
const startwlan = require('./routes/startwlan');
const airodwlan1 = require('./routes/airodwlan1');
const app = express();
const router = express.Router();
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./frontend/html/'));
app.use('/', router);
app.use('/users', users);
app.use('/checkkill', checkkill);
app.use('/startwlan', startwlan);
app.use('/airodwlan1', airodwlan1)
router.get('/', function (req, res) {
} )

app.listen(port);
module.exports = app;
