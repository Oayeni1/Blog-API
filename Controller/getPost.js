const routes = require('../Router/routes');

const getPost = async (req, res, next) => {
    try {
        const posts = await Post.find().exec();
        res.json(posts);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};



module.exports=getPost;