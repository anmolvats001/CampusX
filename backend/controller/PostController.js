import CommentModel from "../models/comment.js";
import PostModel from "../models/posts.js";
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

      return {
        ...post.toObject(),
        liked
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
        postdata={...post}
  res.json({success:true,message:"got post",postdata:{...postdata._doc,liked}})
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
const addComment=async(req ,res )=>{
  try {
  const {postId,userId,data}=req.body;
  if(!data){
    return res.json({succes:false,message:"data missing"});
  }
  const newComment=await CommentModel.create({
    data:data,
    creator:userId,
  });
  const commentId=newComment._id;
  await PostModel.findByIdAndUpdate(postId,{$push:{comments:commentId}});
  res.json({succes:false,message:"commented successfully"});
  } catch (error) {
    res.json({succes:false,message:error.message});
  }
}
const AllComments=async(req,res)=>{
  try {
    const {postId}=req.body;
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
    res.json({success:true,message:"got comment",comments:post.comments})
  } catch (error) {
    res.json({success:false,message:error.message})
  }
}
export {AllPost,getPostData,handleLike,addComment,AllComments};