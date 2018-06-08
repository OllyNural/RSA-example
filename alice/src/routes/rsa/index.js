const express = require('express')
const { keyGen } = require('rsa-example-functions')

const router = express.Router()

router.get('/setup', (req, res, next) => {
    res.send(keyGen())
})

module.exports = router
