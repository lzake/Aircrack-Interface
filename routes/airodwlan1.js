const express = require('express');
const router = express.Router();
const execa = require('execa');

router.get('/airodumpStart', function (req, res, next) {
    execa.shell('airodump-ng wlan1mon').then(result => {
        res.json(result.stdout);
    });
});

module.exports = router;
