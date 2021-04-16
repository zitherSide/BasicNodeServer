const http = require('http')
const fs = require('fs')
const ejs = require('ejs')

const main = fs.readFileSync('./main.ejs', 'utf-8')
const sub = fs.readFileSync('./sub.ejs', 'utf-8')

const server = http.createServer((req, res) => {
    const data = ejs.render(main, {
        contents: ejs.render(sub, {
            data: '<p>hoge</p>'
        })
    })

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
})

server.listen(1234)
console.log('Serving...')
