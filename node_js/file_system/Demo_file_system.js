var http = require('http');
var fs = require('fs');

//This script reads file sample.html and returns the content
http.createServer(function(req, res){
	fs.readFile('sample.html', function(error, data){
		res.writeHead(200, {'ContentType':'text/html'});
		res.write(data);
		return res.end();
	})
}).listen(8080); //the server object listens on port 8080