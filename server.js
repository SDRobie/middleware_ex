var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log('This is more difficult than it looks');
  next();
});

app.get('/', function (req, res) {
  res.status(200).send('First GET\n');
});

app.get ('/child', function(req, res){
  res.status(200).send('Second GET\n');
});

app.listen(3000);
