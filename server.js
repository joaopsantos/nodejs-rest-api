const express = require('express');
const app = express();
const mongodb = require('./mongodb.js');
const config = require('./config.js');
var db

app.use(express.static(__dirname + '/public'));

app.listen(9999, function() {
  console.log('Node server listening on 9999')
});

app.get('/employee/get', function(req, res){
  db.collection('restaurants').find({ "address.zipcode": "10075" }).toArray(function(err, results) {
  res.send(results);
  })
  res.set({
    'Cache-Control': 'no-cache'
  });
});

mongodb.connectToServer( function( err ) {
  app.listen(config.server.port, function() {
     console.log('Node server listening on ' + config.server.port);
     db = mongodb.getDb();
  })
});
