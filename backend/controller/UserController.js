import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import validator from "validator";
import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import PostModel from "../models/posts.js"
import transporter from "../middleware/nodemailer.js";
import generateOTP from "../middleware/otpgenerator.js";
import CommentModel from "../models/comment.js";
const Userlogin = async (req, res) => {
  try {
    const { add_no, password } = req.body;
    const user = await userModel.findOne({ add_no });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    console.log("ismatch",isMatched)
    if (isMatched) {
      const utoken = jwt.sign({userId:user._id}, process.env.JWT_SECRET);
      res.json({
        success: true,
        message: "Login successfully",
        utoken: utoken,
      });
    } else {
      res.json({ success: false, message: "wrong credential" });
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
  }
};
const regiser = async (req, res) => {
  try {
    const { email, password, name, add_no } = req.body;
    if (!email || !password || !name || !add_no) {
      return res.json({ message: "feilds are missing ", success: false });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter Password greater than of 8 length",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass =await bcrypt.hash(password, salt);
    const UserData = { email, name, password: hashedPass, add_no };
    const newUser = new userModel(UserData);
    const user = await newUser.save();
    const utoken = jwt.sign({userId:user._id}, process.env.JWT_SECRET);
    return res.json({
      success: true,
      message: "Registered Successfully",
      utoken:utoken,
    });
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message });
  }
};
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;
    const UserData = await userModel.findById(userId).populate({
  path: "posts",
  populate: {
    path: "creator",
    model: "user",
    select:"name profile branch"
  }
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
    const { userId, name, address, dob, gender, phone,bio,branch } = req.body;
    const imageFile = req.file;
    
    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address,
      dob,
      gender,
      bio,
      branch
    });
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;
      console
      await userModel.findByIdAndUpdate(userId, { profile: imageUrl });
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
const deletePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const userData = await userModel.findById(userId);
    userData.posts = userData.posts.filter(
  post => post.toString() !== postId.toString()
);
    await userModel.findByIdAndUpdate(userId, userData);
    const post=await PostModel.findById(postId);
    post.comments.map(async(e)=>{
      await CommentModel.findByIdAndDelete(e);
    })
    await PostModel.findByIdAndDelete(postId);
    res.json({ success: true, message: "Post deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
const uploadPost = async (req, res) => {
  try {
    const { data, block, problem, floor } = req.body;
    const {userId} = req.body;
    const imageFiles = req.files;
    console.log(userId,data,block,problem)
    if (!data || !block || !problem) {
      return res.status(400).json({
        success: false,
        message: "Credential missing"
      });
    }
    const newPost = await PostModel.create({
      creator: userId,
      data,
      block,
      problem,
      files: [],floor
    });

    const postId = newPost._id;

    if (imageFiles && imageFiles.length > 0) {
      const uploadedImages = await Promise.all(
        imageFiles.map(async (file) => {
          const uploadResult = await cloudinary.uploader.upload(file.path, {
            resource_type: "image"
          });

          return {
            src: uploadResult.secure_url,
            type: "image"
          };
        })
      );
      if(!uploadedImages||uploadedImages.length<=0){
        return res.json({success:false,message:"Error occured"})
      }
      await PostModel.findByIdAndUpdate(
        postId,
        { $push: { files: { $each: uploadedImages } } }
      );
    }
    else{
      return res.json({success:false,message:"Error occured"})
    }
    await userModel.findByIdAndUpdate(
      userId,
      { $push: { posts: postId } }
    );

    return res.status(201).json({
      success: true,
      message: "Post uploaded successfully",
      postId
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
const getOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email required" });
    }

    const otp = generateOTP();
    console.log(otp)

    await transporter.sendMail({
      from: '"Campus Connect" <campusconnect743@gmail.com>',
      to: email,
      subject: ` [Campus Connect] Your Verification Code: ${otp}`,
      html: `<h4>Hi User,</h4>
      <h3>Welcome to Campus Connect! To complete your login or action on our platform, please use the following One-Time Password (OTP):</h3>
      <h1>${otp}</h1>
      <h3>Note: This code is valid for the next 10 minutes. Please do not share this OTP with anyone, including the Campus Connect team.</h3>
      </br>
      <h3 >If you did not request this code, you can safely ignore this email. Someone may have entered your email address by mistake.</h3>
      <h3>Helping you resolve campus issues faster, The Campus Connect Team</h3>
      `,
    });

    res.json({ success: true, message: "OTP sent" ,otp});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};const getOtpforforgot = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email required" });
    }

    const otp = generateOTP();

    await transporter.sendMail({
      from: '"Campus Connect" <campusconnect743@gmail.com>',
      to: email,
      subject: ` [Campus Connect] Reset your Campus Connect password`,
      html: `<h4>Hi User,</h4>
      <h3>We received a request to reset the password for your Campus Connect account. No changes have been made yet.</h3>
      <h3>You can reset your password by verifying the otp give below-
Otp:</h3>
      <h1>${otp}</h1>
      <h3>Didn't request this?</br>If you didn’t ask to reset your password, you can safely ignore this email. Your account remains secure as long as you don't click the link.</h3>
      </br>
      <h3 >Best regards,</br>
The Campus Connect Team</br>
Empowering students to build a better campus.</h3>
      <h3>Helping you resolve campus issues faster, The Campus Connect Team</h3>
      `,
    });

    res.json({ success: true, message: "OTP sent" ,otp});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    await Promise.all(
      user.posts.map((postId) => PostModel.findByIdAndDelete(postId))
    );

    await userModel.findByIdAndDelete(userId);

    res.json({ success: true, message: "Account deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};
const resolvePost=async(req,res)=>{
  try {
    const {userId,postId}=req.body;
    const post=await PostModel.findByIdAndUpdate(postId,{resolvedByStudent:true});
    res.json({success:true,message:"Post has been resolved"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error})
  }
}
const checkPassword=async(req,res)=>{
  try {
     const {userId,add_no,password}=req.body;
  const user=await userModel.findById(userId);
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
    const {newPass,userId}=req.body;
  const user=await userModel.findById(userId);
  if(!user){
    return res.json({success:false,message:"User not found"})
  }
  const salt=await bcrypt.genSalt(10);
  const newPassword=await bcrypt.hash(newPass,salt);
  await userModel.findByIdAndUpdate(userId,{password:newPassword});
  res.json({success:true,message:"Password Changed"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }
 const getNotification=async(req,res)=>{
try {
    const {userId}=req.body;
  const user=await userModel.findById(userId).populate("notification");
  res.json({success:true,notification:user.notification})
} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
}
 }
 const deleteNotification=async(req,res)=>{
  try{
   const {userId}=req.body;
const user = await userModel.findByIdAndUpdate(
  userId,
  { $set: { notification: [] } }
);
    res.json({success:true,notification:user.notification})
  }
catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
}
 }
 const Feedback=async(req,res)=>{
  try {
    
  const {userId,data}=req.body;
  const user=await userModel.findById(userId);
  const email=user.email;
  console.log(email);
  await transporter.sendMail({
      from: `"CampusX Feedback" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: user.email,
subject: "Feedback sent",
      html: `<h2>${user.name} has sent you the feedback</h2></br>
      <h2>Data :</h2>
      <h3>${data}</h3>
      `,
    });
    res.json({success:true,message:"feedback sent"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }
 
 const changeforgotPassword=async(req,res)=>{
  try {
    const {newPass,email}=req.body;
  const user=await userModel.findOne({email});
  if(!user){
    return res.json({success:false,message:"User not found"})
  }
  const salt=await bcrypt.genSalt(10);
  const newPassword=await bcrypt.hash(newPass,salt);
  await userModel.findByIdAndUpdate(user._id,{password:newPassword});
  res.json({success:true,message:"Password Changed"});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
 }

export { Userlogin, regiser, getProfile, editProfile, deletePost,uploadPost,getOtp,deleteAccount,resolvePost,checkPassword ,changePassword,getNotification,deleteNotification,Feedback,changeforgotPassword,getOtpforforgot};
