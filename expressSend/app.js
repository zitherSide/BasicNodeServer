const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

app.engine('ejs', ejs.renderFile)
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log('---Get Request---')
    console.log('name is ' + req.query.name)    //expressがqueryにparameterを入れてくれる
    console.log('age is ' + req.query.age)
    res.render('temp.ejs', {})
})

app.post('/', (req, res) => {
    console.log('---Post Request---')
    console.log('name is ' + req.body.name) //post時はbody-parserがbodyにparameterを入れてくれる
    console.log('age is ' + req.body.age)
    res.render('temp.ejs', {})
})

const server = app.listen(1234, () => {console.log('Serving...')})