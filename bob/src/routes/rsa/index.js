const express = require('express')
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', '..', 'db', 'keys.json');
const { keyGen } = require('rsa-example-functions')

const router = express.Router()

router.get('/setup', (req, res, next) => {
    let keys = keyGen()
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err){
            return res.sendStatus(400);
        } else {
            let keyList = JSON.parse(data)
            keyList.push({
                name: 'alice',
                keys
            })
            fs.writeFile(jsonPath, JSON.stringify(keyList), (err) => {
                res.send({ d: keys.d, n: keys.n })
            })
        }
    })
})

module.exports = router
