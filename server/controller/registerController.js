const User = require('../models/User');
const Score = require('../models/Score');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const user = req.body;
    const takeUserName  = await User.findOne({ name: user.name });
    if(takeUserName) {
        res.status(400).json({ message: 'User already exists' });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        const newUser = new User({
            name: user.name,
            email: user.email,
            phone : user.phone,
            password: hashedPassword,
            phone:user.phone,
            userType:user.userType
        });
        try {
            if(user.userType==="employee"){
                const newScore = new Score({
                    name: user.name,
                    experience: 10,
                    skills: 10,
                    education: 10,
                    jobOffer: 10,
                    interviews: 10,
                });
                await newScore.save();
            }
            
           
            
            const savedUser = await newUser.save();
            res.status(201).json({
                user: savedUser
            });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = registerUser;