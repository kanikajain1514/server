const mongooose= require('mongoose');
// mongooose.connect('mongodb://localhost:27017/').then(()=>{
//     console.log("database is connected");
// })

 mongoose.connect('mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/mydatabase').then(()=>{
    console.log("database connected successfully");
 });