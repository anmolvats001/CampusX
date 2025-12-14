import jwt from "jsonwebtoken"
const authAdmin=async(req,res,next)=>{
    try {
        const {atoken}=req.headers;
        if(!atoken){
            return res.json({success:false,message:"Admin not found"})
        }
        const token_decode=jwt.verify(atoken,process.env.JWT_SECRET);
        if(token_decode!=process.env.WATER_ADMIN_EMAIL+process.env.WATER_ADMIN_EMAIL &&token_decode!=process.env.BUILDING_ADMIN_EMAIL+process.env.BUILDING_ADMIN_EMAIL){
            return res.json({success:false,message:"wrong credential"});
        }
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error occured in AuthAdmin"});
    }
}
export default authAdmin;