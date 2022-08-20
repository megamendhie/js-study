var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	var dbo = db.db('mydb');
	var query = {name: /^A/};
	var newValues = {$set: {address: "43 Eze Ego way"}};
	
	dbo.collection("customers").updateMany(query, newValues, function(err, res){
		if(err) throw err;
		console.log(res);
		db.close();
	});
});