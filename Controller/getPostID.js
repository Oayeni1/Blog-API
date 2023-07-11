const routes = require('../Router/routes');
const { Posts } = require('../models/Schema')

const getPostID = async (req, res) => {
    try {
        const postId = req.params.id;
    
        const post = await Posts.findById(postId).exec();
        if (!post) {
          return res.status(404).json({ error: 'Post not found' });
        }
    
        res.json(post);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}



module.exports=getPostID;