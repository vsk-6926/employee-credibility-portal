const Company = require('../../models/Company');
const bcrypt = require('bcrypt');

const loginCompany = async (req, res) => {
    const company = req.body;
    const takeCompany = await Company.findOne({ name: company.name });
    if(takeCompany) {
        const validPassword = await bcrypt.compare(company.password, takeCompany.password);
        if(validPassword) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(400).json({ message: 'Invalid password' });
        }
    }
    else {
        res.status(400).json({ message: 'Company does not exist' });
    }
}

module.exports = loginCompany;
