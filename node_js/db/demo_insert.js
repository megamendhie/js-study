var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxxx",
	database: "mydb"
});

//Script creates connection to the sql server & insert into a table on the mydb database
con.connect(function(err){
	if(err)throw err;
	console.log("Connected!");
	
	let sql = "INSERT INTO customers (name, address) VALUES ('Chris Colomba', '43 Igwe Road')";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("1 record inserted")
	})
});