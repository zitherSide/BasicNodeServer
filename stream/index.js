const http = require('http')
const url = require('url')
const fs = require('fs')

const server = http.createServer( (req, res) => {
    if(!req.url.match(/.*\.jpg/)){
        res.end()
        return
    }
    const urlParts = url.parse(req.url)
    const path = __dirname + '/' + urlParts.pathname
    const stream = fs.createReadStream(path)
    stream.pipe(res)

    //stream.on('data', data => { res.write(data)})
    //stream.on('end', data => { res.end()})
})

server.listen(1234)
console.log('Server booted...')