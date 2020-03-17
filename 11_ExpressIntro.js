var express = require('express');
var app = express();

/**
 * res.send sends string data in a data-stream as we saw before
 * res.sendFile sends the whole file in a data-stream too, but
 * it is intelligent enough to understand the Content-Type!!
 */
app.get('/', function(req, res){
    console.log('request was made at: '+req.url);
    //res.send('This is a home page');
    res.sendFile(__dirname+'/htmls/index.html');
});
app.get('/home', function(req, res){
    console.log('request was made at: '+req.url);
    //res.send('This is a home page');
    res.sendFile(__dirname+'/htmls/index.html');
});
app.get('/contact', function(req, res){
    console.log('request was made at: '+req.url);
    //res.send('This is contact page');
    res.sendFile(__dirname+'/htmls/contact.html');
});

/**
 * Route Params
 * dynamic setting up of routing address
 */
app.get('/profile/:id', function(req, res){
    console.log('request was made at: '+req.url);
    res.send('Requested Profile ID: ' + req.params.id);
});

app.listen(3000);
console.log("Server Live at '127.0.0.1:3000'");