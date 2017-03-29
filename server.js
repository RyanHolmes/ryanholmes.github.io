var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("running on port localhost:3000");
});

app.get('/data', function(req, res){
  var data = fs.readFileSync(__dirname + '/data.json');
  res.send(data);
  res.sendStatus(200);
});
