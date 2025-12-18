import express from "express";
import authUser from "../middleware/authUser.js";
import{addComment, AllComments, AllPost, getPostData, handleAgree, handleLike, likeComment} from "../controller/PostController.js"
const postRouter=express.Router();
postRouter.get("/alluser-post",authUser,AllPost);
postRouter.post("/getPostData",authUser,getPostData);
postRouter.post("/like-postuser",authUser,handleLike);
postRouter.post("/comment-post",authUser,addComment);
postRouter.post("/allcomments",authUser,AllComments);
postRouter.post("/like-comment",authUser,likeComment);
postRouter.post("/agree",authUser,handleAgree)
export default postRouter;