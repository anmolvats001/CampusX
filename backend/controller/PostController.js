
import PostModel from "../models/posts.js";
import CommentModel from "../models/comment.js";
const AllPost = async (req, res) => {
  try {
    const { userId } = req.body;

const posts = await PostModel.find().populate({
  path: "creator",
  select: "name profile branch"
});
    const postdata = posts.map((post) => {
      const liked = post.likes.some(
        (id) => id.toString() === userId.toString()
      );
      const agreed = post.agrees.some(
        (id) => id.toString() === userId.toString()
      );
      return {
        ...post.toObject(),
        liked,agreed
      };
    });

    res.json({
      success: true,
      message: "got posts",
      postdata
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};
const getPostData=async(req,res)=>{
  try {
    const {postId,userId}=req.body;
  const post=await PostModel.findById(postId).populate({
    path:"creator",
    select:"name branch profile"
  });
  let postdata={};
      const liked = post.likes.some(
        (id) => id.toString() === userId.toString()
      );
      const agreed = post.agrees.some(
        (id) => id.toString() === userId.toString()
      );
        postdata={...post}
  res.json({success:true,message:"got post",postdata:{...postdata._doc,liked,agreed}})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message});
  }
}
const handleLike=async(req,res)=>{
  try {
    
  const {userId,postId}=req.body;
  if(!postId||!userId){
    return res.json({succes:false,message:"post/user is missing"});
  }
  const post=await PostModel.findById(postId);
  const exist= post.likes.includes(userId);

  if(exist){
    await PostModel.findByIdAndUpdate(postId,{$pull:{likes:userId}});
    res.json({success:true,message:"Post UnLiked"});
  }
  else{
    await PostModel.findByIdAndUpdate(postId,{$push:{likes:userId}});
    res.json({success:true,message:"Post Liked"});
  }
  
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
const handleAgree=async(req,res)=>{
  try {
    
  const {userId,postId}=req.body;
  if(!postId||!userId){
    return res.json({succes:false,message:"post/user is missing"});
  }
  const post=await PostModel.findById(postId);
  const exist= post.agrees.includes(userId);

  if(exist){
    await PostModel.findByIdAndUpdate(postId,{$pull:{agrees:userId}});
    res.json({success:true,message:"You Disagreed"});
  }
  else{
    await PostModel.findByIdAndUpdate(postId,{$push:{agrees:userId}});
    res.json({success:true,message:"You Agreed"});
  }
  
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}

const addComment=async(req ,res )=>{
  try {
  const {postId,userId,data}=req.body;
  if(!data){
    return res.json({succes:false,message:"data missing"});
  }
  const newComment=await CommentModel.create({
    data:data,
    creator:userId,
    post:postId
  });
  const commentId=newComment._id;
  await PostModel.findByIdAndUpdate(postId,{$push:{comments:commentId}});
  res.json({success:true,message:"commented successfully"});
  } catch (error) {
    res.json({succes:false,message:error.message});
  }
}
const AllComments=async(req,res)=>{
  try {
    const {postId,userId}=req.body;
    if(!postId){
      return res.json({success:false,message:"cant find the post"})
    }

    const post=await PostModel.findById(postId).populate({
      path:"comments",
      populate:{
        path:"creator",
        select:"name profile branch"
      }
    });
    
        const commentdata = post.comments.map((comment) => {
      const liked = comment.likes.some(
        (id) => id.toString() === userId.toString()
      );

      return {
        ...comment.toObject(),
        liked
      };
    });

    res.json({success:true,message:"got comment",comments:commentdata})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}
const likeComment=async(req,res)=>{
  try {
    const {commentId,userId}=req.body;
    if(!commentId||!userId){
    return res.json({succes:false,message:"comment/user is missing"});
  }
  const post=await CommentModel.findById(commentId);
  const exist= post.likes.includes(userId);

  if(exist){
    await CommentModel.findByIdAndUpdate(commentId,{$pull:{likes:userId}});
    res.json({success:true,message:"comment UnLiked"});
  }
  else{
    await CommentModel.findByIdAndUpdate(commentId,{$push:{likes:userId}});
    res.json({success:true,message:"comment Liked"});
  }
  
  } catch (error) {
   console.log(error);
   res.json({success:false,message:error.message}) 
  }
}
export {AllPost,getPostData,handleLike,addComment,AllComments,likeComment,handleAgree};