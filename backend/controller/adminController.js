import jwt from "jsonwebtoken"
import adminModel from "../models/admin.js";
import bcrypt from "bcrypt";
import {v2 as cloudinary} from "cloudinary"
import InchargeModel from "../models/incharge.js";
import PostModel from "../models/posts.js"
const login =async(req ,res )=>{
    try {
       const { email, password} = req.body;
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    console.log("ismatch",isMatched)
    if (isMatched) {
      const atoken = jwt.sign({adminId:user._id}, process.env.JWT_SECRET);
      res.json({
        success: true,
        message: "Login successfully",
        atoken,
      });
    } else {
      res.json({ success: false, message: "wrong credential" });
    }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}
const getProfile = async (req, res) => {
  try {
    const { adminId } = req.body;
    const UserData = await adminModel.findById(adminId)
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
    const { adminId, name, address, dob, gender, phone,bio } = req.body;
    const imageFile = req.file;
    console.log(name,address)
    await adminModel.findByIdAndUpdate(adminId, {
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
      await adminModel.findByIdAndUpdate(adminId, { profile: imageUrl });
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
     const {adminId,password}=req.body;
  const user=await adminModel.findById(adminId);
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
    const {newPass,adminId}=req.body;
  const user=await adminModel.findById(adminId);
  if(!user){
    return res.json({success:false,message:"User not found"})
  }
  const salt=await bcrypt.genSalt(10);
  const newPassword=await bcrypt.hash(newPass,salt);
  await adminModel.findByIdAndUpdate(adminId,{password:newPassword});
  res.json({success:true,message:"Password Changed"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }
const addIncharge=async(req,res)=>{
  try {
    
  const {name,password,bio,work,email,address,adminId}=req.body;
  const imageFile=req.file;
  const salt=await bcrypt.genSalt(10);
  const newpass=await bcrypt.hash(password,salt);
  const incharge=await InchargeModel.create({
    name,password:newpass,email,bio,address,work
  });
  if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      await InchargeModel.findByIdAndUpdate(incharge._id,{profile:imageUrl});
  }
  res.json({success:true,message:"Added"});
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
const getAllIncharge=async(req,res)=>{
  const {adminId}=req.body;
  const admin=await adminModel.findById(adminId);
  const incharges=await PostModel.findOne({work:admin.work});
  console.log(incharges);
}
export {login,getProfile,editProfile,checkPassword,changePassword,addIncharge,getAllIncharge};