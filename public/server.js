var http = require('http');

var hostname ='127.0.0.1';
var port = 8080;

var server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from Node</h1>');
});

server.listen(port, hostname, () => {
    console.log('server is running');
});