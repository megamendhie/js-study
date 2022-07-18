var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
	var q = url.parse(adr, true);
	
var txt = `<h2>Demo url module</h2>
<b>pathname:</b> ${q.pathname}<br>
<b>search:</b> ${q.search}<br>
<b>month:</b> ${q.month}<br>
<b>host:</b> ${q.host}`;

res.writeHead(200, {'Content-Type': 'text/html'});
res.write(txt);
res.end();
}).listen(8080);