var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxx",
	database: "mydb"
});

con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	
	//query infor about each field in the customers table of the mydb database
	sql = "SELECT name, address FROM customers"
	con.query(sql, function(err, result, fields){
		if(err) throw err;
		console.log(fields);
	});
});
