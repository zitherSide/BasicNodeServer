const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync('./index.html', 'utf-8')
const nextPage = fs.readFileSync('./next.html', 'utf-8')

const server = http.createServer((req, res) => {
    let body = ''
    switch(req.url){
    case '/':
    case '/index':
        res.end(indexPage)
        break
    case '/next':
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(nextPage)
        break
    default:
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.end('bad request')
        return
    }
                
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(body)
})

server.listen(1234)
console.log('Server is booted')