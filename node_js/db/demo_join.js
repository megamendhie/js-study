var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "xxxxx",
	database: "mydb"
});


con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	
	sql = "SELECT customers.name as name, products.name as pro, products.color as color FROM customers JOIN products ON customers.id = products.id"
	con.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
	});
});