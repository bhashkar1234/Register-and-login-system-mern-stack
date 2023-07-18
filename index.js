import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



mongoose.set("strictQuery", false);



mongoose
  .connect("mongodb://127.0.0.1:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },(err)=>{
    if(!err)
    console.log('dbconnected');
    else console.log(err)
  })



  const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
  })
  
  const User=new mongoose.model("User",userSchema);

app.post("/login", (req, res) => {
  const {email,password}=req.body
  User.findOne({email:email},(err,user)=>{
    if(user)
    {
       if(password === user.password)
       { res.send({ message:"login successful",user})}
   
         else { res.send({message:"password didnot match"})}
      }
    else {
      res.send({message:"user not registered"})
    }
  })
});
app.post("/register", (req, res) => {
  const {name,email,password}=req.body
  User.findOne({email:email},(err,user)=>{
    if(user)
    {res.send({message:"user already registered"})}

    else{
      const user = new User({
        name:name,
        email:email,
        password:password
      })
      user.save(err=>{
        if(err)
        {
          res.send(err)
    
        }
        else {res.send({message:"successfully registered"})}
      })
    }
  })
 


  
});

app.listen(9002, () => {
  console.log("Be started at port 9002");
});
