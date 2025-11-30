const express= require('express');
const myapp=express.Router();
const mymodel=require('../schemas/basicmodel');




myapp.get("/",(req,res)=>{
    res.send("this is default");
});


myapp.get("/about",(req,res)=>{
    res.send("this is my about page");
});

myapp.get("/alluser",async(req,res)=>{

    const users=await mymodel.find();
    res.send({msg:"get all user list",datalist:users,status:209});
});

//registor user api

myapp.post("/registoruser",async(req,res)=>{
    const {firstname,lastname,username,city,state,zip}=req.body;
    
    if(firstname==="" || lastname===""){
        res.send({msg:"firstname and lastname must have fill",status:330});
    }
    else{
        const postdata=new mymodel({firstname,lastname,username,city,state,zip});
        await postdata.save();
        res.send({msg:"submit successsfulllly", status: 256,useregistor:postdata})
    }
    
});

myapp.delete("/recorddelete/:id",async(req,res)=>{
    const id = req.params.id;
      const duser= await mymodel.findByIdAndDelete({_id:id});
      res.send({msg:"user delete succesfully", status:253,user:duser});
});

myapp.get("/singleuser/:id", async(req,res)=>{
    const id = req.params.id;
    const user = await mymodel.find({_id:id});
    res.send({ msg: "user get successfully", status: 255, singleuser:user});
});

myapp.post("/userlogin",async(req,res)=>{
    const {email,pass}=req.body;
    if(email=="" || pass=="")
    {
        res.send({msg:"email or password must be needed",status:280});

    }
    else{
        const userdata=await mymodel.findOne({email:email});
        if(userdata.email==email && userdata.pass==pass)
     {
       res.send({msg:"successfully login",status:251});

    }
    else
    {
       res.send({msg:"email and password don't match",status:231}); 
    }

}
});
  

myapp.patch("/updateuser/:id",async(req,res)=>{
    const id = req.params.id;
    
    const updatedata = await mymodel.findByIdAndUpdate(id,req.body,{new:true});
    res.send({msg:"update user info",status:251});
});



module.exports=myapp;