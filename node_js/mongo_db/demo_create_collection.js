var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://0.0.0.0:27017/";
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log("Database created!");
	
	var dbo = db.db("mydb");
	dbo.createCollection("customers", function(err, res){
		if(err) throw err;
		console.log("Collection created!");
		db.close();
	});
});