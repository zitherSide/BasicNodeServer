const express = require('express')
const ejs = require('ejs')
const app = express()
const session = require('express-session')

app.engine('ejs', ejs.renderFile)
app.use(session({
    secret: 'hoge',     //セッションのハッシュ化に使う文字列
    resave: true,       //変更がなくても保存するか。ふつうはtrue
    saveUnitiliatized: true //未初期化セッションも保存するか。ふつうはtrue
}))

app.get('/', (req, res) => {
    let cnt = req.session.cnt == undefined ? 0 : req.session.cnt
    cnt++
    req.session.cnt = cnt   //保存はリクエストのプロパティにする
    res.render('temp.ejs', {
        cnt: cnt
    })
})

const server = app.listen(1234, () => console.log("Serving..."))