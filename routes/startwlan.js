const express = require('express');
const router = express.Router();
const execa = require('execa');

router.get('/start', function (req, res, next) {

    execa.shell('airmon-ng start wlan1').then(result => {
        res.json(result.stdout);
    });
});

module.exports = router;
