import jwt from 'jsonwebtoken';

const authUser=async(req,res,next)=>{
    try {
        const {token}=req.headers;
        // console.log(token);
        
        if(!token){
            return res.json({success:false,message:"Token Required"});
        }

        const token_decoded=jwt.verify(token,process.env.JWT_SECRET);
        // token_decoded me user ki id hogi
        req.body.UserId=token_decoded.id;

        next();
   
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:error.message})

        
    }
}

export default authUser;