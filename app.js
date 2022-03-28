const express = require('express')
const morgan = require('morgan')

// set up express app
const app = express();

// register view engine
app.set('view engine', 'ejs');





// sets what folder to set your views in 
// app.set('views', 'myviews')

// listen for requests
app.listen(3000);

app.use(morgan('dev'));

// static file middleware
app.use(express.static('public'));

// app.use((req, res, next) =>{
//     console.log('new request made')
//     console.log('host: ', req.hostname)
//     console.log('method', req.method)
//     next();

// })

// app.use((req, res, next) =>{
//     console.log('the next middleware part')
//     next();
// })

app.get('/', (req, res) => {
    const blogs = [
      {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
  });

  app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });

  app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
  });

app.get('/about-us',(req, res) =>{
    res.redirect('/about')
})

// 404 page
// the use function will fire for every request if it hasn't sent a response yet.
// if this was above the other requests it would super sede them
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });