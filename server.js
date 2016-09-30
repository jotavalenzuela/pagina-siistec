// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

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
})

function redirectUnmatched(req, res) {
  res.render('pages/index')
}

//todo lo que no este que vaya a home ejemplo "8080/adfasdf"
app.get('*', function(req, res){
  res.redirect('/');
});

app.listen(8080);
console.log('8080 is the magic port');
