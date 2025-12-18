import express from "express";
import authUser from "../middleware/authUser.js";
import{AllPost, getPostData, handleLike} from "../controller/PostController.js"
const postRouter=express.Router();
postRouter.get("/alluser-post",authUser,AllPost);
postRouter.post("/getPostData",authUser,getPostData);
postRouter.post("/like-postuser",authUser,handleLike)
export default postRouter;