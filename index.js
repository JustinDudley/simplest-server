const http = require('http');
const server = http.createServer((req,res) => {
    res.end('simplest server')
})
server.listen(8000, '127.0.0.1', () => console.log("Server is listening on Port 8000"))