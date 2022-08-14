MongoClient = require('mongodb').MongoClient;
url = "mongodb://0.0.0.0:27017/mydb";


/*
This code returns only the address in the MongoDb database.
By setting address as 1, the query returns only the address and ignores all other fields.
*/

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db('mydb');
	dbo.collection("customers").find({}, {projection:{_id:0, address:1}})
	.toArray(function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
	
});