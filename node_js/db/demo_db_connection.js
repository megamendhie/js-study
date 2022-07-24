var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Mega4321@",
	database: "mydb"
});

//Script creates connection to the sql server & create a table on the mydb database
con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	con.query('CREATE TABLE customers(name VARCHAR(225), address VARCHAR(225))', function(err, result){
		if(err) throw err;
		console.log("Table created!")
	})
});