const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.end('Hello, and welcome!')
    }
    if (req.url === '/about'){
        res.end('I am Michael')
    }
    res.end(`
    <h1>Oops!</h1>
    `)
})

server.listen(5555)