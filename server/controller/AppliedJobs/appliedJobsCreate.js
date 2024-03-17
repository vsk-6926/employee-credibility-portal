const AppliedJob = require('../../models/appliedJobs');

// Create a new applied job
const createAppliedJob = async (req, res) => {
    const { jobTitle, name, company, employee, resumeLink, coverLetter, additionalInformation } = req.body;

    try {
      const appliedJob = new AppliedJob({
        jobTitle,
        name,
        company,
        employee,
        resumeLink,
        coverLetter,
        additionalInformation,
      });

    const savedAppliedJob = await appliedJob.save();
    res.status(201).json(savedAppliedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createAppliedJob,
};