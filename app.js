require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/shop', (req, res) => {
    res.render('shop',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/services', (req, res) => {
    res.render('services',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/thankyou', (req, res) => {
    res.render('thankyou',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/contact', (req, res) => {
    res.render('contact',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/cart', (req, res) => {
    res.render('cart',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/blog', (req, res) => {
    res.render('blog',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/about', (req, res) => {
    res.render('about',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('/checkout', (req, res) => {
    res.render('checkout',{
        namePage: 'GR Audio Visuales',
        title: 'Audio Visuales'
    });
    
  });

  app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });

  app.get('/', (req, res) => {
    res.send('Hello World')
  });

  console.log(port);
app.listen(port);