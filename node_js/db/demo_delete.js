var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxxx",
	database: "mydb"
});

con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	var sql = "DELETE FROM customers WHERE name LIKE 'M%'"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
	//using order by to sort
	sql = "SELECT * FROM customers";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log(result);
	});
});
