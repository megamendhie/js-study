var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	
	fs.readFile(filename, function(err, data){
	console.log("h-" + filename + "-t");
		if(err){
			res.writeHead(404, {'Content-Type':'text/html'});
			return res.end(`<p>Error 404</p><p>File could not be fetched</p> ${err.toString()}`);
		}
		
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});
}).listen(8080);