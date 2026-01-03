const mongoose=require('mongoose');
const ConnectUserdb= async() =>{
    try{
        const Connection=await mongoose.connect('mongodb+srv://users:users@surveyhere.tn18k.mongodb.net/?retryWrites=true&w=majority&appName=SurveyHere',{dbName:"users"});
        console.log("Connected to Usersdb");
        return Connection;
    }catch(error){
        console.error("Usersdb connection failed",error.message);
    }
}
module.exports=ConnectUserdb;