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
	
	let sql = "INSERT INTO customers (name, address) VALUES ?";
	let values = [
		['Mark Spencer', '93 Gates Ave'],
		['Oliver Caan', '73 Jupiter Way'],
		['Mega Mendhie', '11 Mega Drive'],
		['Alex Osifo', '64 Ibiam Street'],
		['Olusegun Obasanjo', '73 Otta Way'],
		['Mark Zaddy', '24 Money Drive']
	];
	con.query(sql, [values], function(err, result){
		if(err) throw err;
		console.log("multiple records inserted: "+ result.affectedRows);
	})
});