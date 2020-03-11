const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionUrl="mongodb+srv://New_user:dgm12345@cluster0-apii4.mongodb.net/test?retryWrites=true&w=majority"
const databaseName="todos-db"

MongoClient.connect(connectionUrl,{useNewUrlParser:true},function(err,client){
if(err){

	console.log("error connetion")
	return;

}

db=client.db(databaseName)
db.collection("user").insertOne({

	"name":"madhu",
	"gender":"m",
	"city":"ich"

})
db.collection("user").find({"name":"madhu"}).toArray(function(err,data){
console.log(data);


})

})