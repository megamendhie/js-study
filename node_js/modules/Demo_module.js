var http = require('http');
var mmm = require('./FirstModule');

http.createServer(function(req, res){
	res.writeHead(200, {'ContentType' : 'text/html'}) //the first argument is status code 200 which means all is okay
	res.write('This message is supposed to display as HTML: ' + req.url); //write a response to the client
	res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

