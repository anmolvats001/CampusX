import express from "express";
import { addIncharge, changePassword, checkPassword, editProfile, getProfile, login } from "../controller/adminController.js";
import authAdmin from "../middleware/authAdmin.js";
import upload from "../middleware/multer.js";
const adminRouter=express.Router();
adminRouter.post("/login",login);
adminRouter.get("/profile",authAdmin,getProfile);
adminRouter.post("/editprofile",upload.single("image",1),authAdmin,editProfile);
adminRouter.post("/addincharge",upload.single("image",1),authAdmin,addIncharge)
adminRouter.post("/checkpass",authAdmin,checkPassword);
adminRouter.post("/changePass",authAdmin,changePassword)
export default adminRouter;