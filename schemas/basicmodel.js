const mongoose=require('mongoose')



const datamodel =mongoose.Schema({

    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    city:{
        type:String
    },
    username:{
        type:String
    },
    state:{
        type:String
    },
    zip:{
        type:String
    }


});

const mymodel=mongoose.model("srcusers",datamodel);
module.exports=mymodel;