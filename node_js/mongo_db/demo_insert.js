var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("mydb");
	var myobj = {name: "Mega-M Inc", address: "32 Agric Way"};
	dbo.collection("customers").insertOne(myobj, function(err, res){
		if(err) throw err;
		console.log("1 document inserted");
		db.close();
	});
});