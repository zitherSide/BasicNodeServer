const http = require('http')
const fs = require('fs')
const url = require('url')
const qs = require('querystring')

const indexPage = fs.readFileSync('./index.html', 'utf-8')

const server = http.createServer( (req, res) => {
    if(req.method == 'GET'){
        const urlParts = url.parse(req.url, true)   //true:Objectにする, falseそのまま文字列
        console.log('---GET Request---')
        console.log('name is ' + urlParts.query.name)
        console.log('age is ' + urlParts.query.age)
    }else{
        let body = ''
        req.on('data', data => { body += data })    //postはcallbackでオンデマンドに対応
        req.on('end', () => {                       //endでpostの終了が来る
            const params = qs.parse(body)
            console.log('---POST Request---')
            console.log('name is ' + params.name)
            console.log('age is ' + params.age)
        })
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(indexPage)
    res.end()
})

server.listen(1234)
console.log("Server listening...")