const routes = require('../Router/routes');
const validate = require('../Validation/toValidate');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
    
        // Validate input
        const schema = Joi.object({
          username: Joi.string().required(),
          password: Joi.string().required(),
        });
        const { error } = schema.validate({ username, password });
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
    
        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          return res.status(409).json({ error: 'Username is already taken' });
        }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
    
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}


module.exports=register;