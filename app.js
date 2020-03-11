const fs=require('fs')
const express=require('express')
const app=express()
const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
const ObjectID=require('mongodb').ObjectID;
const connectionUrl="mongodb+srv://New_user:dgm12345@cluster0-apii4.mongodb.net/test?retryWrites=true&w=majority"
const databaseName="todos-db"

MongoClient.connect(connectionUrl,{useNewUrlParser:true},function(err,client){
if(err){

	console.log("error connetion")
	return;

}
app.get('/',function(req,resp){
    fs.readFile("todo/index.html",function(err,data){

        resp.send(data.toString())
    })

})

app.get('/tododb',function(req,res){

    db.collection("user").find({}).toArray(function(err,data){
        
            
        res.send(data);
        
        
        })
      
    
    
    /*fs.readFile("todo/index.html",function(err,data){
       console.log(err);
        res.send(data.toString());
    })*/
});

db=client.db(databaseName)
app.get('/update',function(req,resp){
var newval=req.query.updatedval
var id=req.query.id;


var q={_id:id};
 db.collection("user").updateOne({"_id":ObjectID(id)},{$set:{"task":newval}},function(err,res){

    if(err)
    console.log(err)
  })

})
app.get('/delete',function(req,resp){
    var delt=req.query.del
    
    
    
    
     db.collection("user").deleteOne({"task":delt},function(err,res){
    
        if(err)
        console.log(err)
      })
    resp.send("success")
    })

app.get('/todo/add',function(req,resp){
   
db.collection("user").insertOne({

	"title":"madhusudhan",
	"task":`${req.query.todoname}`

})

db.collection("user").find({"task":`${req.query.todoname}`}).toArray(function(err,data){
   // console.log(data[0].title);
    
  
    resp.send(data[0]._id.toString());
    
    })
    

   
    
    /*var id=Math.floor(Math.random()*100);
    console.log(req.query);

    if(typeof(req.query.todoname)!=undefined && req.query.todoname!=""){
        var todoname=req.query.todoname;
        console.log(todoname);
    }
    fs.readFile("todo/index.json",function(er,tododata){
       
       var todolistdata=JSON.parse(tododata);
       //todolistdata=todolistdata.task;
       // console.log(todolistdata);
       todolistdata.task.push({"title":todoname,"checked":false,"idt":id});
        fs.writeFile("todo/index.json",JSON.stringify(todolistdata),function(err){
           // console.log(err);
        });
        resp.send(id.toString());

    });*/
    
})
})
app.listen(process.env.PORT||3000,function(){
    console.log("servers started");
})