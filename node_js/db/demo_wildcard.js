var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Mega4321@",
	database: "mydb"
});

con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	
	
	//query selects all columns from the customers where name starts with 'M'
	var sql = "SELECT * FROM customers WHERE name LIKE 'M%'";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
	
	//using escape query values
	var name = "Mega Mendhie";
	var sql = "SELECT * FROM customers WHERE name = " + mysql.escape(name);
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
	
	
	//using placeholder
	name = "Mark Spencer";
	var sql = "SELECT * FROM customers WHERE name = ?";
	con.query(sql, [name], function(err, result){
		if(err) throw err;
		console.log(result);
	});
	
	//using multiple placeholder
	var sql = "SELECT * FROM customers WHERE name = ? OR name = ?";
	con.query(sql, ["Mark Spencer", "Mega Mendhie"], function(err, result){
		if(err) throw err;
		console.log(result);
	});
});
