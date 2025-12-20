import InchargeModel from "../models/incharge.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import PostModel from "../models/posts.js";
import{v2 as cloudinary}from "cloudinary"
const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    console.log(email,password)
    const incharge = await InchargeModel.findOne({ email });
    console.log(incharge)
    if(!incharge){
      return res.json({success:false,message:"Incharge not found"})
    }
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
const getProfile = async (req, res) => {
  try {
    const { inchargeId } = req.body;
    const UserData = await InchargeModel.findById(inchargeId).populate({
      path:"posts"
    })
    res.json({ success: true, message: "Profile got successfully ", UserData });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
const editProfile = async (req, res) => {
  try {
    const { inchargeId, name, address, dob, gender, phone,bio } = req.body;
    const imageFile = req.file;
    console.log(name,address)
    await InchargeModel.findByIdAndUpdate(inchargeId, {
      name,
      phone,
      address,
      dob,
      gender,
      bio
    });
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      await InchargeModel.findByIdAndUpdate(inchargeId, { profile: imageUrl });
    }

    return res.json({ success: true, message: "Edited Successfully" });
  } catch (error) {
    console.log(error)
    res.json({
      success: false,
      message: error.message,
    });
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
const resolvePost=async(req,res)=>{
  try {
  const {inchargeId,postId}=req.body;
  const imageFile = req.file;
  console.log(imageFile)
  if(!postId){
   return res.json({success:false,message:"Post not found"});
  }
  await PostModel.findByIdAndUpdate(postId,{resolvedByIncharge:true});
  if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      await PostModel.findByIdAndUpdate(postId, {verifiedImage: imageUrl });
    }
    await InchargeModel.findByIdAndUpdate(inchargeId,{ $push: { posts: postId } })
  res.json({success:true,message:"Post has been resolved"})
  } catch (error) {
    
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
export { login,checkPassword,changePassword ,resolvePost,getProfile,editProfile};
