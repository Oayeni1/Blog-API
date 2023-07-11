const { Posts } = require('../models/Schema');
const joi = require('joi');

const putUser = async (req, res) => {
    try {
        const postId = req.params.id;
        const { title, content } = req.body;

        // Validate input
        const schema = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
        });
        const { error } = schema.validate({ title, content });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        // Find the post and update
        const updatedPost = await Posts.findByIdAndUpdate(
            postId,
            { title, content },
            { new: true }
        ).exec();
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        }
};



module.exports=putUser;