'use strict';

// INITIALISE EXPRESS
var express = require('express');
var bodyParser = require('body-parser');

var rsa = require('./routes/rsa');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require('path');

app.use('/rsa', rsa);

app.all('*', function (req, res) {
  return res.sendStatus(404);
});

app.listen(process.env.PORT);
//# sourceMappingURL=index.js.map