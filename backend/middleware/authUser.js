import jwt from "jsonwebtoken";
const authUser=async(req , res ,next)=>{
    try {
        const {utoken}=req.headers;
        if(!utoken){
            res.json({success:false,message:"User not found"});
        }
        const utoken_decode=jwt.verify(utoken,process.env.JWT_SECRET);
        req.body=req.body||{};
        req.body.userId=utoken_decode.userId;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error occured in authUser"});
    }
}
export default authUser;