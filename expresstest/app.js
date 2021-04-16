const express = require('express')
const ejs = require('ejs')
const app = express()

app.engine('ejs', ejs.renerFile)

app.get('/', (req, res) => {
    res.render('temp.ejs', {
        contents: '<p>hoge</p>'
    })
})

const server = app.listen(1234, () => console.log('Serving...'))
