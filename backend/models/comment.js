import mongoose from "mongoose";

const CommentSchema=new mongoose.Schema({
    creator:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"post",required:true},
    publishedOn:{type:Date,required:true,default:Date.now},
    data:{type:String,required:true},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
});
const CommentModel=mongoose.model("comment",CommentSchema);
export default CommentModel;