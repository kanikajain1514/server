const express = require('express');
const cors = require('cors');
const myapp= express();
require('dotenv').config();
require('./database/DB');
const myport = process.env.PORT || 5600
const myrout=require('./approuting/Route');

 


myapp.use(express.json());
myapp.use(cors());
myapp.use(myrout);



myapp.listen(myport,()=>{
    console.log(`server is runtime at port no:${myport}`);
});