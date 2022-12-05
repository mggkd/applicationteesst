const http = require('http');
const hostname = '0.0.0.0';
const port = 13000;
const server = http.createServer((req, res) => {
 console.log(req.headers);
 res.statusCode = 200;
 res.end('<html><body><h1>Hello, World! Bro how are you fine good</h1></body></html>');
})
server.listen(port, hostname);
