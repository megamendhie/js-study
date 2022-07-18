var fs = require('fs');

//To rename a file with the File System module,  use the fs.rename() method.

fs.rename('newfile2.html', 'newfile3.html', function(err){
	if(err) throw Error("Can't find file");
	console.log('File renamed!');
});