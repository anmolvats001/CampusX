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
    return res.josn({succes:false,message:"post/user is missing"});
  }
  const post=await PostModel.findById(postId);
  const exist=post.likes.some((id)=>id.toString()===userId.toString());
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
export {AllPost,getPostData,handleLike};