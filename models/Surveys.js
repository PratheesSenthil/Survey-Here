const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://users:users@surveyhere.tn18k.mongodb.net/',{dbName:'users'})
.then(()=>{console.log("db connected to surveys schema")})
.catch((error)=>{console.error(error.message)});


const SurveySchema= new mongoose.Schema({
    username:{type:String,required:true},
    surveys:{type:Array,required:true}
});

const Surveys=mongoose.model("Surveys",SurveySchema,'surveys');

module.exports=Surveys;


    