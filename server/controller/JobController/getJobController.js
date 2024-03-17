const Job = require('../../models/Job');
const getJobDetails = async (req, res) => {
    try {
      const {id} = req.body;

    
      const job = await Job.find({ _id: { $in: id }} );
  
      if (job) {
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