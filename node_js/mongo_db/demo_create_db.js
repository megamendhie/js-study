var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://0.0.0.0:27017/mydb";
MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	console.log("Database created!");
	db.close();
});