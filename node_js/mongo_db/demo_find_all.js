MongoClient = require('mongodb').MongoClient;
url = "mongodb://0.0.0.0:27017/mydb";


/*
This code returns all fields in the mydb database.
*/

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db('mydb');
	dbo.collection("customers").find({}).toArray(function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
	
});