const User = require('../models/User');
const Score = require('../models/Score');
const bcrypt = require('bcrypt');
const employee = require('../models/employee');
const Company = require('../models/Company');

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
            username:user.username,
            email: user.email,
            phone : user.phone,
            password: hashedPassword,
            userType:user.userType
        });
        try {
            if(user.userType==="employee"){
                const newEmployee= new employee({
                    name: user.name,
                  email: user.email,
                  phone : user.phone,
                  totalScore:80

                })
                const newScore = new Score({
                    name: user.name,
                    experience: 80,
                    technicalSkills: 80,
                    interPersonalSkills: 80,
                    problemSolving: 80,
                    offersAcceptance:80,
                    interviews: 80,
                    totalScore:80
                });
                await newScore.save();
                await newEmployee.save();
            }else if(user.userType==="company"){
                const newCompany = new Company({
                    name: user.name,
                  email: user.email,
                  phone : user.phone,
                })
                await newCompany.save();
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