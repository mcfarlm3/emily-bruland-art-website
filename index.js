var express = require('express');
var exphbs = require('express-handlebars')

var app = express();

express.static('..');
app.use(express.static('static'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('port', 3000);

//route for homepage request
app.get('/', (req, res) => {
  return res.render('home.handlebars');
});

//route for about page request
app.get('/about', (req, res) => {
  return res.render('about.handlebars');
});

//route for portfolio page request
app.get('/portfolio', (req, res) => {
  return res.render('portfolio.handlebars');
});

//route for contact page request
app.get('/contact', (req, res) => {
  return res.render('contact.handlebars');
});

//route for 404 Not Found
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.render('404.handlebars');
});

//route for 500 server error
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500.handlebars');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});