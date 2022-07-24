var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxx",
	database: "mydb"
});

//Script creates connection to the sql server & alter a table on the mydb database
con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	con.query('ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY', function(err, result){
		if(err) throw err;
		console.log("Table altered!")
	})
});