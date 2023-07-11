const { Users } = require('../models/Schema');
const joi = require('joi');

const putUserID = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email } = req.body;
    
        // Validate input
        const schema = Joi.object({
          username: Joi.string().required(),
          email: Joi.string().email().required(),
        });
        const { error } = schema.validate({ username, email });
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
    
        // Find the user and update
        const updatedUser = await Users.findByIdAndUpdate(
          userId,
          { username, email },
          { new: true }
        ).exec();
        if (!updatedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        res.json(updatedUser);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    };


module.exports=putUserID;