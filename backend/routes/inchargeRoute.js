import express from "express";
import { changePassword, checkPassword, login } from "../controller/InchargeController.js";
import authIncharge from "../middleware/authIncharge.js";
const inchargeRouter=express.Router();
inchargeRouter.post("/login",login);
inchargeRouter.post("/checkpass",authIncharge,checkPassword);
inchargeRouter.post("/changePass",authIncharge,changePassword)
export default inchargeRouter;