var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write(uc.upperCase("This text verifies that the uc module is working properly"));
	res.end();
}).listen(8080);