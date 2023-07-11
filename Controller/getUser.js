const routes = require('../Router/routes');
const { Users } = require('../models/Schema')

const getUser = async (req, res) => {
    try {
        const users = await Users.find().exec();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports=getUser;