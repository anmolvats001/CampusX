import express from "express";
import { changeforgotPassword, changePassword, checkPassword, deleteAccount, deleteNotification, deletePost, editProfile, Feedback, getNotification, getOtp, getOtpforforgot, getProfile, regiser, resolvePost, uploadPost, Userlogin } from "../controller/UserController.js";
import authUser from "../middleware/authUser.js"
import upload from "../middleware/multer.js";
const userRouter=express.Router();
userRouter.post("/login",Userlogin)
userRouter.post("/register",regiser);
userRouter.get("/profile",authUser,getProfile);
userRouter.post("/editprofile",upload.single("image",1),authUser,editProfile);
userRouter.post("/deletePost",authUser,deletePost);
userRouter.post("/post",upload.array("images", 4),authUser,uploadPost);
userRouter.post("/otp",getOtp);
userRouter.post("/forgototp",getOtpforforgot)
userRouter.get("/deleteaccount",authUser,deleteAccount);
userRouter.post("/resolvepost",authUser,resolvePost);
userRouter.post("/checkpass",authUser,checkPassword);
userRouter.post("/changePass",authUser,changePassword);
userRouter.get("/getNotification",authUser,getNotification);
userRouter.get("/deleteNotifications",authUser,deleteNotification);
userRouter.post("/feedback",authUser,Feedback);
userRouter.post("/forgotpass",changeforgotPassword);
export default userRouter;