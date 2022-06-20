const exp=require('express')
const app=exp()

//IMPORT .ENV 

require('dotenv').config();

//DATABASE SERVER
const mClient=require('mongodb').MongoClient;

//import module  path

const path=require('path');


//Connect build reat with Nodejs 

app.use(exp.static(path.join(__dirname,'./build')));


//DATABASE CONNECTION URL
const dbUrl=process.env.DATABASE_CONNECTION_URL;

//CONNECT WITH MONGO DB SERVER
mClient.connect(dbUrl)
.then((client)=>{

    ///DB object
     let dbObj=client.db("Venkat5452");
     let adminObj=dbObj.collection("Admin");
     let usercollectionObj=dbObj.collection("usercollection");
     let productcollectionObj=dbObj.collection("productcollection");

     //sharing Objects to APIS
     app.set("usercollectionObj",usercollectionObj);
     app.set("productcollectionObj",productcollectionObj);
     app.set("adminObj",adminObj);

    console.log("DATABASE Connected succesfully")
})
.catch(err => console.log('###Error in connection DB',err));

//IMPORT 2 APIS
const userApp=require('./APIS/USERAPI.JS');
const productApp=require('./APIS/PRODUCTAPI.JS');
const adminApp=require('./APIS/ADMINAPI');

app.use('/user',userApp);
app.use('/product',productApp);
app.use('/admin',adminApp);

//PAGE REFRESH
app.use('*',(Request,Response)=>{
    Response.sendFile(path.join(__dirname,'./build/index.html'));
})

//MIDDLEWARES TO CATCH THE ERRORS 1.PATH 2.SYNTAX..

app.use((Request,Response,Next)=>{
    Response.send({message:`path ${Request.url} is Invalid`})
})

app.use((error,Request,Response,Next)=>{
    Response.send({message:`${error.message}--syntax error occured`})
})

//SERVER
const port=process.env.PORT
app.listen(port,()=>console.log(`Server ${port} started...`))