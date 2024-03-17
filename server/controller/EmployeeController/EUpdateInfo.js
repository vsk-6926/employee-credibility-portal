const Employee = require('../../models/employee');

const updateInfo = async (req, res) => {
    const employee = req.body;
    const { name, currentCompany, experience, skills, location } = employee;
  
    try {
      // Find the employee by name and update the fields
      const updatedEmployee = await Employee.findOneAndUpdate(
        { name },
        {
          currentCompany,
          experience,
          skills,
          location,
        },
        { new: true }
      );
  
      res.status(200).json(updatedEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
  };

module.exports = updateInfo;