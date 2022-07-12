var http = require('http');
var mmm = require('./FirstModule');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h2>Cool stuff here!</h2><br/>'+mmm.dateTime());
}).listen(8080);