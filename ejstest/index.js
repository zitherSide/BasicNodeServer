const http = require('http')
const fs = require('fs')
var ejs = require('ejs')

var temp = fs.readFileSync('./temp.ejs', 'utf-8')
const server = http.createServer( (req, res) => {
    const data = ejs.render(temp, {
        title: 'EJS Test',
        contents1: '<p>No escape</p>',
        contents2: '<p>escaped</p>',
        arr: ['straw berry', 'melon', 'banana']
    });
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
})

server.listen(1234)
console.log('Serving...')