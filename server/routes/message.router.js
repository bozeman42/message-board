var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  author: String,
  message: String
});

var Message = mongoose.model('Message', MessageSchema, 'messages');

router.post('/', function(req,res){
  var message = req.body;
  var messageToAdd = new Message(message);
  messageToAdd.save(function(err,data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('Message Added');
      res.sendStatus(201);
    }
  });
});

module.exports = router;