var express = require('express');
var router = require('./routes');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//nunjucks
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

//logging and body-parsing
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static routing
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/tone', express.static(path.join(__dirname, '/node_modules/tone/build/')))
app.use(express.static(path.join(__dirname, '/public')));

//routers
app.use(router);

//error handling
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500);
  res.render('error', {
    error: err
  });
});

// server
var port = 3000;
app.listen(port);
// app.listen(port, function () {
//   db.sync()
//     .then(function () {
//       console.log('DB synced')
//     })
//     .catch(function (err){
//       console.error(err, err.stack)
//     })
// })
