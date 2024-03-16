const { default: mongoose } = require('mongoose');
const Company = require('../../models/Company');
const bcrypt = require('bcrypt');

const registerCompany = async (req, res) => {
    const company   = req.body;
    const takeCompany = await Company.findOne({ name: company.name });
    if(takeCompany) {
        res.status(400).json({ message: 'Company already exists' });
    } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(company.password, salt);
        console.log(user.password)
        const newCompany = new Company({
            id: new mongoose.Types.ObjectId(),
            name: company.name,
            password: hashedPassword,
            phone : company.phone,
            email : company.email,
        });
        try {
            const savedCompany = await newCompany.save();
            res.status(201).json(savedCompany);
        } catch (err) {
            res.status(500).json({ message: err });
        }
    }
}

module.exports = registerCompany;