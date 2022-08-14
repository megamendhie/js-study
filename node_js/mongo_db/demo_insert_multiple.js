var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;

var url = "mongodb://0.0.0.0:27017/";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	
	var dbo = db.db("mydb");
	var dbobj = [
		{_id: '234', name: 'Toyota Camry'},
		{_id: '235', name: 'Nissan Pathfinder'},
		{_id: '236', name: 'Nissan Xtrail'}
	];
	
	dbo.collection("products").insertMany(dbobj, function(err, res){
		if(err) throw err;
		console.log("Number of documents inserted: " + res.insertedCount);
		console.log(res);
		db.close();
	});
});