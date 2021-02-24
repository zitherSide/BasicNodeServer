const http = require('http')
const fs = require('fs')
const {promisify} = require('util')

const server = http.createServer((req, res) => {
    promisify(fs.readFile)('./temp.html', 'utf-8')
        .then(data => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
        .catch(err => {
            console .log(err)
        })
})

// const server = http.createServer((req, res) => {
//     fs.readFile('./temp.html', 'utf-8', (err, data) => {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data)
//         res.end()
//     })
// })

server.listen(1234)
console.log("Server booted.")