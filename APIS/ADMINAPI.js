const exp=require('express');
const adminApp=exp.Router();

require('dotenv').config();

//JASON WEB TOKEN TO CREATE A TOEKN FOR USER 
const jToken=require('jsonwebtoken');
//IMPORT BCRYPTJS FOR PASSWORD HASHING
 
const bcrypt=require('bcryptjs');

//ERROR HANDLER

const errorHandler=require('express-async-handler');

//INBUILT MIDDLEWARE -- (exp.json())--To get complete object into varible
//example--let newUser=Request.body; used in post Route


adminApp.use(exp.json())

//MIDDLEWARE###########

/*const middleware1=(Request,Response,Next)=>{
    console.log("Middle ware 1");
    Next();
}    */

//adminApp.use(middleware1); -- middleware function call if needes outside


//FAKE DATA###########




//ROUTES############--USER

adminApp.get('/getusers',/*middleware1*/ errorHandler(async(Request,Response)=>{
    let adminObj=Request.app.get("adminObj");

    let users=await adminObj.find().toArray();

    Response.send({message:"THE USERS ARE",payload : users});
  
}));

adminApp.post('/login',errorHandler(async(Request,Response)=>{
    
    let adminObj=Request.app.get("adminObj");
    
    let userCred=Request.body;
     
    let userOfDb=await adminObj.findOne({userName:userCred.userName});

    if(userOfDb == null) {
        Response.send({message:"USER NOT FOUND"});
    }
    else {
        //COMPARE PASSWORDS
       let status=await bcrypt.compare(userCred.password,userOfDb.password);
       if(status == true) {
           
        let Token=jToken.sign({username:userOfDb.password},process.env.SECRETKEY,{expiresIn:60})
          
        Response.send({message:"LOG IN SUCCESS",payload:Token,useOBJ:userOfDb})
       }
       else {
           Response.send({message:"INVALID PASSWORD"});
       }
    }


}));

adminApp.post('/create-admin',errorHandler(async(Request,Response)=>{

    let adminObj=Request.app.get("adminObj");
   
    let newUser=Request.body;

    let userofDb=await adminObj.findOne({ID:newUser.ID});

    if(userofDb == null) {
        let userofDbc=await adminObj.findOne({userName:newUser.userName});
        if(userofDbc == null) {
        //TO HASH THE PASSWORD
         let hpassword=await  bcrypt.hash(newUser.password,6);
        //TO STORE THE HASHED PASSWORD
         newUser.password=hpassword;
         await adminObj.insertOne(newUser);
         Response.send({message:"Admin Created Succefully"});
        }
        else {
            Response.send({message:"UserName already Been Registered"});
        }
    }
    else {
        Response.send({message:"Phone Number already Been Registered"});
    }
  
}));

module.exports=adminApp;