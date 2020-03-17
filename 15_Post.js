var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });


// HTTP GET and POST request handlers:
app.get('/', function(req, res){
    console.log('request was made at: '+req.url);
    res.render('index');
});
app.get('/home', function(req, res){
    console.log('request was made at: '+req.url);
    res.render('index');
});
app.get('/contact', function(req, res){
    console.log('request was made at: '+req.url);
    console.log('recieved quary parsed into object as follows:')
    console.log(req.query);
    res.render('contact',{qs:req.query});
});
/**
 * urlencodedParser is a middleware here
 * it gives access to the request body by parsing it for us
 * and then converting it into a JS object
 */
app.post('/contact', urlencodedParser, function(req, res){
    console.log('POST request made to server');
    console.log('data passed in request body:');
    console.log(req.body);

    if(!req.body){
        return res.sendStatus(400);
    }
    res.render('contact-success',{data:req.body});
});
app.get('/profile/:id', function(req, res){
    console.log('request was made at: '+req.url);

    var data = {name:"Atanu", age:28, job:'engineer', hobbies:['gaming','music','reading','adventure']};
    res.render("profile", {id:req.params.id, data:data});
});

app.listen(3000);
console.log("Server Live at '127.0.0.1:3000'");