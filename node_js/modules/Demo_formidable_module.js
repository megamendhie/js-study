var http = require('http');
var fs = require('fs');
var formidable = require('formidable');


http.createServer((req, res)=>{
	if(req.url=='/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req,(err, fields, files)=>{
			var oldpath = files.filetoupload.filepath;
			var newpath = "C:/Users/USER.DESKTOP-1MTD7GD/Desktop/js_study/node_js/modules/"+files.filetoupload.originalFilename;
			fs.rename(oldpath, newpath, function(err){
				if(err) throw err;
				res.write("File upload successful");
				res.end();
			});
			res.writeHead(200, {'Content-Type':'text/html'});
			res.write('File uploaded successfully: '+files.toString);
			res.end();
		});
	}
	else{
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write('<form action="fileupload" method = "post" enctype = "multipart/form-data">');
		res.write('<input type="file" name="filetoupload"> <br><p>');
		res.write('<input type="submit">');
		res.write('</form>');
		res.end();
	}
}).listen(8080);