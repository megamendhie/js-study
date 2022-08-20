var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";


/*
This code returns an array of items that meet a particular query.
*/
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("mydb");
	
	var query = {address: "45 Ebu Nkakad"};
	dbo.collection("customers").find(query).toArray(function(err, res){
		if(err) throw err;
		
		console.log(res);
		db.close();
	});
});