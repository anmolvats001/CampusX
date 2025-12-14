import jwt from "jsonwebtoken";
const authIncharge=async(req ,res ,next)=>{
    try {
        const {itoken}=req.headers;
        if(!itoken){
            return res.json({success:false,message:"Incharge not found"});
        }
        const itoken_decode=jwt.verify(itoken,process.env.JWT_SECRET);
        req.body=req.body||{};
        req.body.inchargeId=itoken_decode.inchargeId;
        next();
    } catch (error) {
        console.log("error occued");
        res.json({success:false,message:"error occured in authIncharge"})
    }
}
export default authIncharge