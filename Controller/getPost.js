const routes = require('../Router/routes');
const { Posts } = require('../models/Schema');

const getPost = async (req, res, next) => {
    try {
        const posts = await Posts.find().exec();
        res.json(posts);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};



module.exports=getPost;