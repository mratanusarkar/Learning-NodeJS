/**
 * Note: all css was embedded into html/ejs
 * in 13_Middleware.js, they were moved to
 * a different folder. assets
 */

var express = require('express');
var app = express();
app.set('view engine', 'ejs');  // set ejs as defalut template engine

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

/**
 * ejs is embedded java script
 * it allows us to embed a js in html
 * it is a template engine or view engine
 * 
 * res.render() renders a view
 * no need of path name or extention
 * it by defalut searches in views folder!
 * render() takes the ejs-template and an object as second parameter
 * then renders the data from obj to the template and displays them!
 */
app.get('/profile/:id', function(req, res){
    console.log('request was made at: '+req.url);

    var data = {name:"Atanu", age:28, job:'engineer', hobbies:['gaming','music','reading','adventure']};
    res.render("profile", {id:req.params.id, data:data});
});

app.listen(3000);
console.log("Server Live at '127.0.0.1:3000'");