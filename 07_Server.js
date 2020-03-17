var http = require('http');

/* 
req obj comes loded with data from client.
we can use to send responce bact to client!
*/
var server = http.createServer(function(req, res) {
    console.log('client made a request at: '+req.url);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello World!');
});

server.listen(3000, '127.0.0.1');
console.log('port 3000 is live now!');