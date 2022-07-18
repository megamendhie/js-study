var fs = require('fs');

/*The fs.open() method takes a "flag" as the second argument.
If the flag is "w" for "writing", the specified file is opened for writing.
If the file does not exist, an empty file is created:
*/

fs.open('newFile.html', 'w', function(err, file){
	if(err) throw error;
	console.log('saved!');
});