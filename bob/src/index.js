require('dotenv').config();

// INITIALISE EXPRESS
const express = require('express')
const bodyParser = require('body-parser')

const rsa = require('./routes/rsa')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const path = require('path')

app.use('/rsa', rsa)

app.all('*', (req, res) => res.sendStatus(404));

app.listen(process.env.PORT)