const routes = require('../Router/routes');


const deletedPost = async (req, res) => {
    try {
        const postId = req.param.id;

        //find the post and delete
        const deletePost = await Post.findByIdAndDelete(postId).exec();
        if (!deletePost) {
            return res.status(404).json({error: 'Post not found.' });
        }
        else{

           return res.json({message: 'Post deleted successfully' });
        }
    }   catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};




module.exports=deletedPost;