'use strict';

var express = require('express');

var _require = require('rsa-example-functions'),
    keyGen = _require.keyGen;

var router = express.Router();

router.get('/', function (req, res, next) {
    res.send(keyGen());
});

module.exports = router;
//# sourceMappingURL=index.js.map