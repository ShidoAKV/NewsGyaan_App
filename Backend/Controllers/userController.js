import { UserModel } from "../Model/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import dotenv from 'dotenv';

dotenv.config();

const registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        // console.log(name,email,password);
        
        if(!name||!email||!password){
            return res.json({success:false,message:'Mising Details'});
        }
      
        if(!validator.isEmail(email)){
            return res.json({success:false,message:'Invalid Email'});
        }
        if(password.length<8){
            return res.json({success:false,message:'Enter Strong Password'});
        }

        const userExist=await UserModel.findOne({email});
        if(userExist){
            return res.json({success:false,message:'User Exist'});
        }
       

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

    
        const userData={
            name,
            email,
            password:hashedPassword,
        }
        const newUser=new UserModel(userData);
        const user=await newUser.save();

         // token generation
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET);

      const expirationTime = new Date();
      expirationTime.setHours(expirationTime.getHours() + 500);

        const options={
            httpOnly:true,
            secure:true,
            sameSite: 'lax',
            expires:expirationTime
        }
        return res.cookie('token',token,options).json({ success: true,token });
  
    } catch (error) {
      return res.json({success:false,message:error.message});
    }
}

const loginUser=async(req,res)=>{
    try {
       const {email,password}=req.body;
       const userData=await UserModel.findOne({email});
 
       if(!userData){
        return res.json({success:false,message:"No user Found"});
       }
      

       // password Compare;
       const isMatched=await bcrypt.compare(password,userData.password);

     if(isMatched){
      const token= jwt.sign({id:userData._id,},process.env.JWT_SECRET);

      const expirationTime = new Date();
      expirationTime.setHours(expirationTime.getHours() + 500);

        return res
        .cookie('token', token,{
            httpOnly:true,
            secure:true,
            sameSite: 'lax',
            expires:expirationTime
        })
        .json({ success: true, token });

       }else{
        return res.json({success:false,message:"Invalid Credentials"});
       }
    } catch (error) {
        return res.json({success:false,message:error.message});
    }
}
 
const logout=async(req,res)=>{
    try { 
    //    console.log(req);
       
       res.clearCookie('token',{httpOnly:true,secure:true,sameSite: 'lax',});
       res.json({ success: true, message: 'Logged out successfully' });
        
    } catch (error) {
          return res.json({success:false,message:error.message});
    } 
}

// const test=async(req,res)=>{
//     try {
//          return res.cookie('token','Abhishek',{httpOnly:true,secure:true}).json({success:true,message:'successfully'});
//     } catch (error) {
//          return res.json({success:false,message:'unsuccessfully'});
//     }
// }





export {registerUser,loginUser,logout};