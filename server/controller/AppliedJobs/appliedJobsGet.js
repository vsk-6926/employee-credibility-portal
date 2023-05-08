const AppliedJob = require('../../models/appliedJobs');

// Get applied jobs by company name and job title
const getAppliedJobs = async (req, res) => {
  const { company, jobTitle } = req.body;

  try {
    const appliedJobs = await AppliedJob.find({
      company: company,
      jobTitle: jobTitle,
    });

    res.json(appliedJobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAppliedJobs,
};