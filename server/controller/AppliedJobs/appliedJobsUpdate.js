const AppliedJob = require('../../models/appliedJobs');

// Update an applied job by ID
const updateAppliedJob = async (req, res) => {
    const { jobTitle, company, employee, offered } = req.body;

    try {
      const updatedAppliedJob = await AppliedJob.findOneAndUpdate(
        { jobTitle, company, employee }, // Find the record based on jobTitle, company, and employee
        { offered }, // Update the offered field
        { new: true } // Return the updated document
      );
  
      if (!updatedAppliedJob) {
        return res.status(404).json({ message: 'Applied job not found' });
      }
  
      res.json(updatedAppliedJob);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


module.exports = {
  updateAppliedJob,
};