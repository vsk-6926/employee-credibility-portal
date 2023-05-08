const Employee = require('../../models/employee');

const createEmployee = async (req, res) => {
    const employee = req.body;
    const newEmployee = new Employee({
        id : new mongoose.Types.ObjectId(),
        name: employee.name,
        email: employee.email,
        phone : employee.phone,
    });
    try {
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = createEmployee;