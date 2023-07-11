const routes = require('../Router/routes');

const postPost = async (req, res) => {
    try {
    
        // Validate input
        const schema = Joi.object({
          title: Joi.string().required(),
          content: Joi.string().required(),
        });
        const { error } = schema.validate();
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
    
        // Create a new post
        const newPost = new Post({
          title,
          content,
          userId: req.user.id,
        });
        await newPost.save();
    
        res.json(newPost);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}


module.exports=postPost;