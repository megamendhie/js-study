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
	
	//limit to 4
	sql = "SELECT * FROM customers LIMIT 4"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
	
	//limit to 4
	sql = "SELECT * FROM customers LIMIT 4 OFFSET 2"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
	
	sql = "SELECT * FROM customers"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
});
