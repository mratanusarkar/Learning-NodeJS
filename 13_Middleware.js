var express = require('express');
var app = express();
app.set('view engine', 'ejs');

// app.use('/assets', function(req, res, next){
//     console.log("inside middleware:");
//     console.log(req.url);
//     /**
//      * so, we see all the links and css file paths are passed as urls\
//      * when the html loads, it fires up css requests as links!!!!
//      * 
//      * in middleware, we might catch these request links and load up the css
//      * by our own, but express comes with pre-written middleware to handel 
//      * these static contents!! it's express.static()
//      */
//     next();
// });

app.use('/assets', express.static('assets'));

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
    res.render('contact');
});

app.get('/profile/:id', function(req, res){
    console.log('request was made at: '+req.url);

    var data = {name:"Atanu", age:28, job:'engineer', hobbies:['gaming','music','reading','adventure']};
    res.render("profile", {id:req.params.id, data:data});
});

app.listen(3000);
console.log("Server Live at '127.0.0.1:3000'");