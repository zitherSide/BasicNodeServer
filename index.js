var http = require('http')

var server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write('Hello world.')
    res.end()
})

server.listen(1234)
console.log('Server started.')