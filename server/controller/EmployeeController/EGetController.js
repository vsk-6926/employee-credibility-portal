const Employee = require('../../models/employee');

const getEmployeeDetails = async (req, res) => {
    try {
      const { name } = req.body;
      // Find employees by comparing the employee name
      const employee = await Employee.find({ name: name });
      res.json(employee);
    } catch (error) {
      console.error('Error fetching employee details:', error);
      res.status(500).json({ error: 'Failed to fetch employee details' });
    }
  };

const getAllEmployees= async(req,res)=>{
  try {
    // Query the database to get all employee details
    const employees = await Employee.find();

    // Send the employee details as the response
    res.json(employees);
  } catch (error) {
    console.error('Error fetching employee details:', error);
    res.status(500).json({ error: 'Failed to fetch employee details' });
  }
}
  
  module.exports = { getEmployeeDetails,getAllEmployees };