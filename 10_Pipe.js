var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/poem.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

/**
 * connects the read stream to the write stream so that
 * the buffer gets filled from the read source and then
 * the data chunk is written to the write destination
 * this is used for data transfer between client & server
 * in much more efficient manner
 */

 /**
     * we pipe a read-stream with a write-stream
     * res is a write-stream
 */

myReadStream.pipe(myWriteStream); // read and then write automatically!

var server = http.createServer(function(req,res){
    console.log('request was made at: '+req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var Id = req.url;
    if (Id == '/0' || Id == '/1' || Id == '/2' || Id == '/3' 
    || Id == '/4' || Id == '/5' || Id == '/6' || Id == '/7' 
    || Id == '/8' || Id == '/9' || Id == '/10' || Id == '/11' 
    || Id == '/12' || Id == '/13') {
        dir = __dirname + '/poems/' + req.url + '.txt';
        var readstream = fs.createReadStream(dir, 'utf8');
        readstream.pipe(res);
    } else if(Id == '/favicon.ico'){
        
    } else {
        dir = __dirname + '/poems/' + '0.txt';
        var readstream = fs.createReadStream(dir, 'utf8');
        readstream.pipe(res);
    }

    //res.end('\n\nThe End');
    // res can only take a string or a buffer...
});

server.listen(3000, '127.0.0.1');
console.log("server is live at 127.0.0.1:3000");