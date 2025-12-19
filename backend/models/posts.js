import mongoose from "mongoose";
const PostSchema=new mongoose.Schema({
    creator:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    publishedOn:{type:Date,default:Date.now},
    resolvedByStudent:{type:Boolean,required:true,default:false},
    resolvedByIncharge:{type:Boolean,required:true,default:false},
    verifiedImage:{type:String,default:"null"},
    verifiedBy:{type:String},
    data:{type:String,required:true},
    block:{type:String,required:true},
    problem:{type:String,required:true},
    files:[{type:Object}],
    floor:{type:String,default:"0"},
    likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    agrees:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:"comment"}],
})
const PostModel= mongoose.model("post",PostSchema);
export default PostModel;