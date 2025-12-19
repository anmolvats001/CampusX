import jwt from "jsonwebtoken"
const authAdmin=async(req,res,next)=>{
    try {
       const {atoken}=req.headers;
               if(!atoken){
                   res.json({success:false,message:"User not found"});
               }
               const atoken_decode=jwt.verify(atoken,process.env.JWT_SECRET);
               req.body=req.body||{};
               req.body.adminId=atoken_decode.adminId;
               next();
           } catch (error) {
               console.log(error);
               res.json({success:false,message:"error occured in authUser"});
           }
}
export default authAdmin;