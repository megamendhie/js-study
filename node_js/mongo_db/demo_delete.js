var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('mydb');
	var query = {address: "62 Wheel Cresent"};
	
	dbo.collection("customers").deleteOne(query, function(err, res){
		if(err) throw err;
		console.log("1 document deleted");
		console.log(res);
		db.close();
	});
});