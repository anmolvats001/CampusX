import PostModel from "../models/posts";
const AllPost = async (req, res) => {
  try {
    const { userId } = req.body;

    const posts = await PostModel.find()
      .populate({
        path: "creator",
        select: "name profile branch"
      })

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

export {AllPost};