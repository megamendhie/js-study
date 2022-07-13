var fs = require('fs');

//To delete a file with the File System module,  use the fs.unlink() method.

fs.unlink('newfile2.html', function(err){
	if(err) throw Error("Can't find file");
	console.log('File deleted!');
});