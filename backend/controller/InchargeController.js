import InchargeModel from "../models/incharge.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const incharge = await InchargeModel.findOne({ email });
    const isMatched = await bcrypt.compare(password, incharge.password);
    console.log("ismatch", isMatched);
    if (isMatched) {
      const itoken = jwt.sign(
        { inchargeId: incharge._id },
        process.env.JWT_SECRET
      );
      res.json({
        success: true,
        message: "Login successfully",
        itoken,
      });
    } else {
      res.json({ success: false, message: "wrong credential" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
const checkPassword=async(req,res)=>{
  try {
     const {inchargeId,password}=req.body;
  const user=await InchargeModel.findById(inchargeId);
  if(!user){
   return  res.json({success:false,message:"User not found"})
  }
  const isCorrect= await bcrypt.compare(password,user.password);
  if(isCorrect){
    res.json({success:true});
  }
  else{
    res.json({success:false,message:"Wrong credential"})
  }

  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Wrong credential"})
  }
 }
 const changePassword=async(req,res)=>{
  try {
    const {newPass,inchargeId}=req.body;
  const user=await InchargeModel.findById(inchargeId);
  if(!user){
    return res.json({success:false,message:"User not found"})
  }
  const salt=await bcrypt.genSalt(10);
  const newPassword=await bcrypt.hash(newPass,salt);
  await InchargeModel.findByIdAndUpdate(inchargeId,{password:newPassword});
  res.json({success:true,message:"Password Changed"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }

export { login,checkPassword,changePassword };
