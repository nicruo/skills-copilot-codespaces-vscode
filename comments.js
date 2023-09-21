// Create a web server that can respond to requests for /comments.json
// with a JSON representation of the comments list.
// Don't forget to set the Content-Type header to application/json.
// You'll need to read the comments.json file into memory on server start.

var http = require('http');
var fs = require('fs');
var port = 8080;

var server = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile('./comments.json', 'utf8', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
});

console.log('Listening on port ' + port);
server.listen(port);