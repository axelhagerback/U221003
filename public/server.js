var http = require('http');
var fs = require('fs');

var hostname ='127.0.0.1';
var port = 8080;

var server = http.createServer((req, res) => {
    fs.readFile('index.html', 'utf8', function(err, data){
        console.log(data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log('Server is running');
});