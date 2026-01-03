const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://users:users@surveyhere.tn18k.mongodb.net/',{dbName:'users'})
.then(()=>{console.log("db connected to users schema");
}).catch((error)=>{console.error(error.message)});


const UsersSchema = new mongoose.Schema({
  email:{type:String,required:true},
  username:{type:String,required:true},
  password:{type:String,required:true}
})

const Usermodel= mongoose.model("users",UsersSchema,'users');


module.exports=Usermodel;