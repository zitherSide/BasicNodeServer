const express = require('express')
const ejs = require('ejs')
const app = express()
const cookieParser = require('cookie-parser')

app.engine('ejs', ejs.renderFile)
app.use(cookieParser())

app.get('/', (req, res) => {
    let cnt = req.cookies.cnt == undefined ? 0 : req.cookies.cnt;   //cookie-parserがcookieをreqに入れてくれる
    cnt++
    res.cookie('cnt', cnt, {maxAge: 5000})      //maxAgeはcookie生存期限のms, 削除はres.clearCookie
    res.render('temp.ejs', {cnt: cnt})
})

const server = app.listen(1234, () => console.log('Serving...'))