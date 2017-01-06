/*
/!*jshint node:true*!/
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);
//var io = require('socket.io').listen(server);

app.set('port', process.env.VCAP_APP_PORT || 1000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// Handle Errors gracefully
app.use(function(err, req, res, next) {
  if(!err) return next();
  console.log(err.stack);
  res.json({error: true});
});

// Main App Page
app.get('/', routes.index);

// MongoDB API Routes
app.get('/polls/polls', routes.list);
app.get('/polls/:id', routes.poll);
//app.post('/polls', routes.create);

//io.sockets.on('connection', routes.vote);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
*/

/*jshint node:true*/
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);
//var io = require('socket.io').listen(server);
/*var appmetrics = require('appmetrics');
 var monitoring = appmetrics.monitor();
 appmetrics.setConfig(mongo, config)
 appmetrics.enable('mongo')*/

app.set('port', process.env.VCAP_APP_PORT || 5400);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



/*monitoring.on('mongo', function (data) {
 console.log('i am here');

 });*/
// Handle Errors gracefully
app.use(function(err, req, res, next) {
  if(!err) return next();
  console.log(err.stack);
  res.json({error: true});
});

// Main App Page
app.get('/', routes.index);

// MongoDB API Routes
app.get('/polls/polls', routes.list);
app.get('/polls/:id', routes.poll);
app.post('/polls', routes.create);
app.post('/vote', routes.vote);

//io.sockets.on('connection', routes.vote);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;

