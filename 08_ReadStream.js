var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/poem.txt', 'utf8');

// when buffer gets filled, it spits out the data in chunks...
myReadStream.on('data', function(dataChunk){
    console.log("data chunk recieved from buffer:");
    console.log(dataChunk);
});