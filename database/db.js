const mongoose=require('mongoose')

// local server
mongoose.connect('mongodb://127.0.0.1:27017/econtent',{ 
}).then((db)=>{
    console.log("Succesfully connected to mongodb server");
},(err)=>console.log(err));