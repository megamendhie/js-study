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
	
	//using order by to sort
	var sql = "SELECT * FROM customers ORDER BY name";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
	
	//using order by to sort in descending order
	var sql = "SELECT * FROM customers ORDER BY address DESC";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
});
