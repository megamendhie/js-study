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
	
	//use this query to update the table
	var sql = "UPDATE customers SET address = '62 Adekunle Way' WHERE name = 'Oliver Caan'"
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
