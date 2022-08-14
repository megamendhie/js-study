MongoClient = require('mongodb').MongoClient;
url = "mongodb://0.0.0.0:27017/mydb";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db('mydb');
	
	dbo.collection("customers").findOne(function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
	
});