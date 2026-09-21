import PostModel from "../models/posts.js";
import CommentModel from "../models/comment.js";

const AllPost = async (req, res) => {
  try {
    const { userId } = req.body;
    const targetUserId = userId ? userId.toString() : null;

    const posts = await PostModel.find()
      .sort({ publishedOn: -1 })
      .populate({
        path: "creator",
        select: "name profile branch",
      })
      .lean();

    const postdata = posts.map((post) => {
      const liked = targetUserId
        ? (post.likes || []).some((id) => id.toString() === targetUserId)
        : false;
      const agreed = targetUserId
        ? (post.agrees || []).some((id) => id.toString() === targetUserId)
        : false;
      return {
        ...post,
        liked,
        agreed,
      };
    });

    res.json({
      success: true,
      message: "got posts",
      postdata,
    });
  } catch (error) {
    console.error("AllPost error:", error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const InchargeAndAdminPost = async (req, res) => {
  try {
    const posts = await PostModel.find()
      .sort({ publishedOn: -1 })
      .populate({
        path: "creator",
        select: "name profile branch",
      })
      .lean();

    res.json({
      success: true,
      message: "got posts",
      postdata: posts,
    });
  } catch (error) {
    console.error("InchargeAndAdminPost error:", error);
    res.json({ success: false, message: error.message });
  }
};

const getPostData = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const targetUserId = userId ? userId.toString() : null;

    const post = await PostModel.findById(postId)
      .populate({
        path: "creator",
        select: "name branch profile",
      })
      .lean();

    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    const liked = targetUserId
      ? (post.likes || []).some((id) => id.toString() === targetUserId)
      : false;
    const agreed = targetUserId
      ? (post.agrees || []).some((id) => id.toString() === targetUserId)
      : false;

    res.json({
      success: true,
      message: "got post",
      postdata: { ...post, liked, agreed },
    });
  } catch (error) {
    console.error("getPostData error:", error);
    res.json({ success: false, message: error.message });
  }
};

const getPostDataInchargeOrAdmin = async (req, res) => {
  try {
    const { postId } = req.body;
    const post = await PostModel.findById(postId)
      .populate({
        path: "creator",
        select: "name branch profile",
      })
      .lean();

    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    res.json({ success: true, message: "got post", postdata: post });
  } catch (error) {
    console.error("getPostDataInchargeOrAdmin error:", error);
    res.json({ success: false, message: error.message });
  }
};

const handleLike = async (req, res) => {
  try {
    const { userId, postId } = req.body;
    if (!postId || !userId) {
      return res.json({ success: false, message: "post/user is missing" });
    }

    const post = await PostModel.findById(postId).select("likes");
    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    const exist = post.likes.some((id) => id.toString() === userId.toString());

    const updated = await PostModel.findByIdAndUpdate(
      postId,
      exist ? { $pull: { likes: userId } } : { $push: { likes: userId } },
      { new: true }
    ).select("likes");

    res.json({
      success: true,
      message: exist ? "Post UnLiked" : "Post Liked",
      liked: !exist,
      likesCount: updated ? updated.likes.length : 0,
    });
  } catch (error) {
    console.error("handleLike error:", error);
    res.json({ success: false, message: error.message });
  }
};

const handleAgree = async (req, res) => {
  try {
    const { userId, postId } = req.body;
    if (!postId || !userId) {
      return res.json({ success: false, message: "post/user is missing" });
    }

    const post = await PostModel.findById(postId).select("agrees");
    if (!post) {
      return res.json({ success: false, message: "Post not found" });
    }

    const exist = post.agrees.some((id) => id.toString() === userId.toString());

    const updated = await PostModel.findByIdAndUpdate(
      postId,
      exist ? { $pull: { agrees: userId } } : { $push: { agrees: userId } },
      { new: true }
    ).select("agrees");

    res.json({
      success: true,
      message: exist ? "You Disagreed" : "You Agreed",
      agreed: !exist,
      agreesCount: updated ? updated.agrees.length : 0,
    });
  } catch (error) {
    console.error("handleAgree error:", error);
    res.json({ success: false, message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { postId, userId, data } = req.body;
    if (!data) {
      return res.json({ success: false, message: "data missing" });
    }

    const newComment = await CommentModel.create({
      data,
      creator: userId,
      post: postId,
    });

    const commentId = newComment._id;
    await PostModel.findByIdAndUpdate(postId, { $push: { comments: commentId } });

    await newComment.populate({
      path: "creator",
      select: "name profile branch",
    });

    res.json({ success: true, message: "commented successfully", comment: newComment });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const AllComments = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    if (!postId) {
      return res.json({ success: false, message: "cant find the post" });
    }

    const post = await PostModel.findById(postId)
      .populate({
        path: "comments",
        populate: {
          path: "creator",
          select: "name profile branch",
        },
      })
      .lean();

    if (!post) {
      return res.json({ success: false, message: "cant find the post" });
    }

    const targetUserId = userId ? userId.toString() : null;
    const commentdata = (post.comments || []).map((comment) => {
      const liked = targetUserId
        ? (comment.likes || []).some((id) => id.toString() === targetUserId)
        : false;

      return {
        ...comment,
        liked,
      };
    });

    res.json({ success: true, message: "got comment", comments: commentdata });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const AllCommentsInchargeorAdmin = async (req, res) => {
  try {
    const { postId } = req.body;
    if (!postId) {
      return res.json({ success: false, message: "cant find the post" });
    }

    const post = await PostModel.findById(postId)
      .populate({
        path: "comments",
        populate: {
          path: "creator",
          select: "name profile branch",
        },
      })
      .lean();

    if (!post) {
      return res.json({ success: false, message: "cant find the post" });
    }

    res.json({ success: true, message: "got comment", comments: post.comments || [] });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const likeComment = async (req, res) => {
  try {
    const { commentId, userId } = req.body;
    if (!commentId || !userId) {
      return res.json({ success: false, message: "comment/user is missing" });
    }

    const post = await CommentModel.findById(commentId).select("likes");
    if (!post) {
      return res.json({ success: false, message: "comment not found" });
    }

    const exist = post.likes.some((id) => id.toString() === userId.toString());

    await CommentModel.findByIdAndUpdate(
      commentId,
      exist ? { $pull: { likes: userId } } : { $push: { likes: userId } }
    );

    res.json({
      success: true,
      message: exist ? "comment UnLiked" : "comment Liked",
      liked: !exist,
    });
  } catch (error) {
    console.error("likeComment error:", error);
    res.json({ success: false, message: error.message });
  }
};

export {
  AllPost,
  getPostData,
  handleLike,
  addComment,
  AllComments,
  likeComment,
  handleAgree,
  InchargeAndAdminPost,
  getPostDataInchargeOrAdmin,
  AllCommentsInchargeorAdmin,
};