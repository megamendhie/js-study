var http = require('http');
var mmm = require('./FirstModule');
var url = require('url');

http.createServer(function(req, res){
	res.writeHead(200, {'ContentType' : 'text/html'}); //the first argument is status code 200 which means all is okay
	var q = url.parse(req.url, true).query;
	var txt = q.year + " "+ q.month;
	res.write(`<h1>This message is supposed to display as HTML</h1><br>${req.url}<br>${txt}`); //write a response to the client
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080