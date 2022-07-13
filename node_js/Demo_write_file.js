var fs = require('fs');

/*The fs.writeFile() method replaces the specified file and content if it exists.
If the file does not exist, a new file, containing the specified content, will be created:
*/

fs.writeFile('newfile2.html', '<html><body>This file is supposed to replace the original file, and if there was none, one would be created',
 function(err){
	if(err) throw error;
	console.log("saved!");
 });