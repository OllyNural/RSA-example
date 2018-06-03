'use strict';

var express = require('express');
var rsalib = require('../rsa');

var router = express.Router();

router.get('/', function (req, res, next) {
    console.log('yo wagwan fam');
    res.sendStatus(200);
});

module.exports = router;
//# sourceMappingURL=index.js.map