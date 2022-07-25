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
	
	//use this query to delete the table from database
	var sql = "DROP TABLE customers"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
	
	
	//use this query to avoid error if the table doesn't exist
	sql = "DROP TABLE IF EXISTS customers"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
});
