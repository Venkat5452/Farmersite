///CREATE A ROUTER TO HANDLE USER API REQUEST
const exp=require('express');
const userApp=exp.Router();

require('dotenv').config();

//JASON WEB TOKEN TO CREATE A TOEKN FOR USER 
const jToken=require('jsonwebtoken');
//IMPORT BCRYPTJS FOR PASSWORD HASHING
 
const bcrypt=require('bcryptjs');

//ERROR HANDLER

const errorHandler=require('express-async-handler');

//INBUILT MIDDLEWARE -- (exp.json())--To get complete object into varible
//example--let newUser=Request.body; used in post Route


userApp.use(exp.json())

//MIDDLEWARE###########

/*const middleware1=(Request,Response,Next)=>{
    console.log("Middle ware 1");
    Next();
}    */

//userApp.use(middleware1); -- middleware function call if needes outside


//FAKE DATA###########




//ROUTES############--USER

userApp.get('/getusers',/*middleware1*/ errorHandler(async(Request,Response)=>{
    let usercollectionObj=Request.app.get("usercollectionObj");

    let users=await usercollectionObj.find().toArray();

    Response.send({message:"THE USERS ARE",payload : users});
  
}));

userApp.post('/login',errorHandler(async(Request,Response)=>{
    
    let usercollectionObj=Request.app.get("usercollectionObj");
    
    let userCred=Request.body;
     
    let userOfDb=await usercollectionObj.findOne({pNumber:userCred.pNumber});

    if(userOfDb == null) {
        Response.send({message:"USER NOT FOUND"});
    }
    else {
        //COMPARE PASSWORDS
       let status=await bcrypt.compare(userCred.Password,userOfDb.Password);
       if(status == true) {
           
        let Token=jToken.sign({username:userOfDb.pNumber},process.env.SECRETKEY,{expiresIn:60})
          
        Response.send({message:"LOG IN SUCCESS",payload:Token,useOBJ:userOfDb})
       }
       else {
           Response.send({message:"INVALID PASSWORD"});
       }
    }


}));

userApp.post('/create-user',errorHandler(async(Request,Response)=>{

    let usercollectionObj=Request.app.get("usercollectionObj");
   
    let newUser=Request.body;

    let userofDb=await usercollectionObj.findOne({PhoneNumber:newUser.PhoneNumber});

    if(userofDb == null) {
        //TO HASH THE PASSWORD
         let hAadhar=await  bcrypt.hash(newUser.Aadhar,6);
        //TO STORE THE HASHED PASSWORD
         newUser.Aadhar=hAadhar;
         await usercollectionObj.insertOne(newUser);
         Response.send({message:"User Created Succefully"});
    }
    else {
        Response.send({message:"Phone Number already Been Registered"});
    }
  
}));

userApp.put('/updateuser',errorHandler(async(Request,Response)=>{
    let mObj=(Request.body)

    

}));

userApp.delete('/removeuser/:id',(Request,Response)=>{

    let sid=(+Request.params.id);
    
});


module.exports=userApp;