var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var db = require('./modules/db.js');

app.use(bodyParser.json());
app.use(express.static('server/public'));

// add routes here

app.listen(port, function(){
  console.log('Listening on port:',port);
});