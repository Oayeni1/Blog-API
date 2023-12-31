const routes = require('../Router/routes');
const { Users } = require('../models/Schema')

const getUserId = async (req, res) => {
    try {
        const userId = req.params.id;
    
        const user = await Users.findById(userId).exec();
        if (!user) {
        return res.status(404).json({ error: 'User not found' });
        }
    
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports=getUserId;