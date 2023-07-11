const routes = require('../Router/routes');

const putUserID = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email } = req.body;


        const schema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
        });
        const { error } = schema.validate({ title, content });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

          // Find the post and update
        const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { title, content },
        { new: true }
        ).exec();
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(updatedPost);
    }   catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports=putUserID;