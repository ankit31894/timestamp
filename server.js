
var express = require("express");
var http = require("http");
var moment = require('moment');
var app = express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});
app.get("*", function(request, response) {
    var momen=moment();
    response.write(request);
  response.end(JSON.stringify({unix:momen.unix(),natural:momen.format('MMMM Do, YYYY)}));
});

http.createServer(app);
var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});