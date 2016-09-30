// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//declaracion directorio estatico para css
//app.use(express.static(__dirname + '/pages'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});
//locacion page
app.get('/locate', function(req, res) {
    res.render('pages/locate')
});
//Contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact')
});
//Services page
app.get('/services', function(req, res) {
    res.render('pages/services')
});


//todo lo que no este que vaya a home ejemplo "8080/adfasdf"
function redirectUnmatched(req, res) {
  res.render('pages/index')
};

app.get('*', function(req, res){
  res.redirect('/');
});

app.use ('/pages/scripts', express.static('static'));


app.listen(8080);
console.log('8080 is the magic port');
