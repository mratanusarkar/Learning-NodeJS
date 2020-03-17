var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/poem.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

// when buffer gets filled, it spits out the data in chunks...
myReadStream.on('data', function(dataChunk){
    console.log("data chunk recieved from buffer and writing that to file");
    myWriteStream.write(dataChunk);
});