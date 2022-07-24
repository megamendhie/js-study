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
	
	
	//query selects all columns from the customers table of the mydb database
	var sql = "SELECT * FROM customers";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	})
	
	//query selects only name column from the customers table of the mydb database
	sql = "SELECT name, address FROM customers"
	con.query(sql, function(err, result, fields){
		if(err) throw err;
		//console.log(result);
	});
	
	
	//query selects where name meets the given
	sql = "SELECT name, address FROM customers WHERE name = 'Mega Mendhie'"
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
});
