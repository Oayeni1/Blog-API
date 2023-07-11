const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const login = async (req, res) => {
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
    
        // Check if the user exists
        const user = await Users.findOne({ username, password });
        if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Validate the password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
        return res.status(401).json({ error: 'Invalid username or password' });
        }
    
        // Generate JWT token
        const token = await jwt.sign({ id: user._id }, process.evn.SECRET_KEY);
    
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
    
}



module.exports=login;