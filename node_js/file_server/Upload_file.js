var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer((req, res)=>{
	if(req.url=="/fileupload"){
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files){
			var oldpath = files.filetoupload.filepath;
			var newpath = "C:/Users/USER.DESKTOP-1MTD7GD/Desktop/js_study/node_js/file_server/"+files.filetoupload.originalFilename;
			fs.rename(oldpath, newpath, function(err){
				if (err) throw error;
				res.write("File uploaded and moved!");
				res.end();
				
			});
		});
	}
	else{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
		res.write('<input type = "file" name = "filetoupload"><br>');
		res.write('<p>')
		res.write('<input type = "submit">');
		res.write('</form>');
		return res.end();
	}
}).listen(8080);