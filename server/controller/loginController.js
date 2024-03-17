const User = require('../models/User');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
    const user = req.body;
    const takeUser = await User.findOne({ username: user.username });
    if(takeUser) {
        const validPassword = await bcrypt.compare(user.password, takeUser.password);
        const userType = takeUser.userType;
        const userId = takeUser.name;
        if(validPassword) {
            res.status(200).json({userType,userId });
        } else {
            res.status(400).json({ message: 'Invalid password' });
        }
    } else {
        res.status(400).json({ message: 'User does not exist' });
    }
}

module.exports = loginUser;