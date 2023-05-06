const employee = require('../../models/employee');

const updateInfo = async (req, res) => {
    const employee = req.body;
    const newEmployee = new Employee({
        id : new mongoose.Types.ObjectId(),
        name: employee.name,
        currentCompany: employee.currentCompany,
        experience: employee.experience,
        skills: employee.skills,
        location: employee.location,
    });
    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = updateInfo;