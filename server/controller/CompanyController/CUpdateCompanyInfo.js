const Company = require('../../models/Company');
const bcrypt = require('bcrypt');

const updateCompanyInfo = async (req, res) => {
    const company = req.body;
    const takeCompany = await Company.findOne({ name: company.name });
    if(!takeCompany){
        res.status(400).json({ message: 'Company does not exist' });
    }
    try{
        const newCompany = await Company.updateOne({ name: company.name }, { $set: {
        description : company.description,
        location : company.location,
        website : company.website,
        }});
        res.status(200).json({ message: 'Update successful' });
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = updateCompanyInfo;
