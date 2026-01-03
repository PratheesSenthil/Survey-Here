const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const ConnectUserdb = require('./Connection/Usersdb');
const Usermodel=require('./models/Usermodel')
const Surveys=require('./models/Surveys')
const app=express();
app.use(express.json());
app.use(cors());
const port=3001;


app.post('/signup',async(req,res)=>{
   const result=req.body;
   console.log(result)
   const { email, username, password } = req.body;

   const newsignup = new Usermodel({ email, username, password });

   try {
      await newsignup.save();
      res.status(201).json({ message: 'Signup created' });
   } catch (error) {
      console.error("Error saving user:", error);
      res.status(400).json({ error: 'Failed to create new signup' });
   }
})

app.get('/login',async(req,res)=>{
   try{
      const login=await Usermodel.find();
      res.json(login);
      console.log(login);
   }catch(error){
      res.status(500).json({error:'failed to fetch user'});
   }
});
  
app.put('/create',async(req,res)=>{
   const {username,surveys}=req.body;
   const existuser=req.params.username;
   const newSurvey=new Surveys({username,surveys});
   try {
      const updatedUser = await Surveys.findOneAndUpdate(
        { username: username },              
        { $push: { surveys: surveys } },      
        {  upsert: true }           
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error("Error updating survey:", err);
      res.status(500).json({ error: "Failed to update survey" });
    }
  });


  app.get('/mysurvey',async(req,res)=>{
   const user=req.query.uname;
   console.log(user);
   try{
      const mysurvey=await Surveys.find(
         {username:user}
      );
      res.json(mysurvey);
      console.log(mysurvey);
   }catch{(error)=>{console.error(error.message)}}
  })


  app.get('/surveys', async (req, res) => {
   try {
     const surveys = await Surveys.find();
     console.log(surveys);
     res.json(surveys);
   } catch (err) {
     console.log("Error while fetching surveys from DB:", err);
     res.status(500).send("Server Error");
   }
 });
app.delete("/remove", async (req, res) => {
   const { username, index } = req.body;
   console.log("Received request:", { username, index }); 
 
   try {
     const user = await Surveys.findOne({ username });
     if (!user) {
       return res.status(404).json({ message: "User not found" });
     }
 
     if (index < 0 || index >= user.surveys.length) {
       return res.status(400).json({ message: "Invalid survey index" });
     }
 
     user.surveys.splice(index, 1);
     const updatedUser = await Surveys.findOneAndUpdate(
       { username },
       { $set: { surveys: user.surveys } },
       { new: true }
     );
 
     res.status(200).json({ message: "Survey deleted successfully", surveys: updatedUser.surveys });
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: "Server error" });
   }
 });


 app.put('/surveyResults',async(req,res)=>{
    const {user,surveys,selectindex}=req.body;
    console.log(user,selectindex);
    const usersurvey = await Surveys.findOne({ username:user});
    // console.log(usersurvey);
    // usersurvey.surveys[selectindex]=surveys;
    usersurvey.surveys[selectindex] = Array.isArray(surveys) ? surveys : [surveys];
    // console.log("user S",usersurvey);
    
    try{
      await Surveys.findOneAndUpdate(
        { username :user},
        { $set: { surveys : usersurvey.surveys } },
        { new: true }
      );
    }catch{(error)=>{console.error(error.message)}}
    
 })

app.listen(port,()=>{console.log('Server is running on port http://localhost:'+port);
})