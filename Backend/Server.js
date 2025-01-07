import express from "express";
import db from "./Config/MongoDB.js";
import dotenv from "dotenv";
import { useRouter } from "./Routes/UserRoute.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();
const PORT_NO=(process.env.PORT||3500);

// Middleware
app.use(cookieParser());
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user',useRouter);

app.get('/',(req,res)=>{
   return res.send({message:'Server started'});
    
})

app.listen(PORT_NO,()=>{
    console.log(`Server Listening on Port ${PORT_NO}`);
})

