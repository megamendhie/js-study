var fs = require('fs');

//This script creates a new file using the appendFile method

fs.appendFile('newfile.html', '<html><body>This file was created using the appendFile method of file system module</body></html>', function(err){
	if(err) throw err;
	console.log("Saved!")
});
