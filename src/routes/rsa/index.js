const express = require('express')
const { keyGen } = require('../../rsalib/src')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send(keyGen())
})

module.exports = router
