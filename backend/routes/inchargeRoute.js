import express from "express";
import upload from "../middleware/multer.js"
import { AddToNotification, changePassword, checkPassword, editProfile, getProfile, login, resolvePost } from "../controller/InchargeController.js";
import authIncharge from "../middleware/authIncharge.js";
const inchargeRouter=express.Router();
inchargeRouter.post("/login",login);
inchargeRouter.post("/checkpass",authIncharge,checkPassword);
inchargeRouter.post("/changePass",authIncharge,changePassword);
inchargeRouter.post("/resolve-post",upload.single("image",1),authIncharge,resolvePost);
inchargeRouter.get("/profile",authIncharge,getProfile);
inchargeRouter.post("/editprofile",upload.single("image",1),authIncharge,editProfile);
export default inchargeRouter;