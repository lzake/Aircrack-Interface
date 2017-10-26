const express = require('express');
const router = express.Router();
const execa = require('execa');

router.get('/kill', function (req, res, next) {
    execa.shell(`airmon-ng check kill`).then(result => {
        res.json(result.stdout);
    });
});

module.exports = router;
