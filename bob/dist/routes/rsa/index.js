'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var jsonPath = path.join(__dirname, '..', '..', 'db', 'keys.json');

var _require = require('rsa-example-functions'),
    keyGen = _require.keyGen;

var router = express.Router();

router.get('/setup', function (req, res, next) {
    var keys = keyGen();
    fs.readFile(jsonPath, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            return res.sendStatus(400);
        } else {
            var keyList = JSON.parse(data);
            keyList.push({
                name: 'alice',
                keys: keys
            });
            console.log(keys);
            console.log(keyList);
            fs.writeFile(jsonPath, JSON.stringify(keyList), function (err) {
                res.send({ d: keys.d, n: keys.n });
            });
        }
    });
});

module.exports = router;
//# sourceMappingURL=index.js.map