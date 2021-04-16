const express = require('express')
const ejs = require('ejs')
const app = express()

const msg = ''
app.engine('ejs', ejs.RenderFile)
app.get('/', (req, res) => {
    res.render('temp.ejs', {})
})
app.post('/ajax', (req, res) => {
    msg += 'hoge'
    res.json({
        msg: msg
    })
})

const server = app.listen(1234, () => console.log('Serving...'))