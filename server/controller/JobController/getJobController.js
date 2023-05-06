const Job = require('../../models/Job');
const getJobDetails = async (req, res) => {
    try {
      const { title, company } = req.query;
  
      // Perform a database query to find the job using the title and company
      const job = await Job.findOne({ title, company });
  
      if (job) {
        // Job found, send the job details as the response
        res.status(200).json(job);
      } else {
        // Job not found
        res.status(404).json({ error: 'Job not found' });
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  module.exports = getJobDetails;