import express from "express"
import { AllPost } from "../controller/PostController";
const postRouter=express.Router();
postRouter.get("/all-post",AllPost);
export default postRouter;