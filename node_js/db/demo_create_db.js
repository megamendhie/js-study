var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxxx"
});

//Script creates connection to the sql server & create a table on the mydb database
con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	con.query('CREATE DATABASE mydb', function(err, result){
		if(err) throw err;
		console.log("Database created!")
	})
});