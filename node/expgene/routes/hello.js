const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){   //app.useされたとこからの相対パスでいいっぽい
    res.render('hello', {
        msg: 'Hello, world!'
    })
})

module.exports = router