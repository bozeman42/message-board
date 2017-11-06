var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/messageboard';

mongoose.connection.on('connected', function(){
  console.log('Mongoose is connected');
});

mongoose.connection.on('error', function(){
  console.log("Mongoose connection failed");
});

// useMongoClient: true eliminates some of the depreciation messages... :)
mongoose.connect(databaseUrl,{useMongoClient: true});

module.exports = mongoose;