
const exp=require('express');
const productApp=exp.Router();
const errorHandler=require('express-async-handler');


productApp.use(exp.json())

require('dotenv').config();

//ROUTES#####-PRODUCT

productApp.get('/getproducts',errorHandler(async(Request,Response)=>{
    let productcollectionObj=Request.app.get("productcollectionObj");
    let products =await productcollectionObj.find().toArray();
    Response.send({message:"ALL PRODUCTS",payload:products});
}));

productApp.get('/getproduct/:id',errorHandler(async(Request,Response)=>{
    let productcollectionObj=Request.app.get("productcollectionObj");
    let PID=(+Request.params.id);
    let product=await productcollectionObj.findOne({productId:PID});
    if(product == null) {
        Response.send({message:"Product with given ID not available"});
    }
    else {
    Response.send({message:"The Product IS",payload:product});
    }
}));


productApp.post('/create-product',errorHandler(async(Request,Response)=>{
   ///GET PRODUCTCOLLECTIONOBJECT
    let productcollectionObj=Request.app.get("productcollectionObj");

    let newObj=Request.body;
    
    let productdb=await productcollectionObj.findOne({ID:newObj.ID});

    if(productdb == null) {

        await productcollectionObj.insertOne(newObj);
        Response.send({message:"PRODUCT ADDED SUCCESSFULLY"});
    }
    else {
        Response.send({message:"Product With Given ID already Exits.."})
    }    
}));

productApp.post('/updateproduct',errorHandler(async(Request,Response)=>{
    let productcollectionObj=Request.app.get("productcollectionObj");

    let newObj=Request.body;
    
    await productcollectionObj.updateOne({ID:newObj.ID},{$set:{...newObj}});

    Response.send({message:"The Product IS Modified"}); 
}));

productApp.delete('/removeproduct/:id',errorHandler(async(Request,Response)=>{
    let productcollectionObj=Request.app.get("productcollectionObj");
    let PID=(+Request.params.id);
    await productcollectionObj.deleteOne({productId:PID});
    Response.send({message:"Product Deleted Successfully"});
   
}));


module.exports=productApp;