const routes = require('../Router/routes');

const getUser = async (req, res) => {
    try {
        const users = await User.find().exec();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports=getUser;