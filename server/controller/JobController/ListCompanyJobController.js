const Job = require('../../models/Job');

const getCompanyJobs = async (req, res) => {
    const job = req.body;
    const takeJob = await Job.find({ company: job.company });
    if(!takeJob){
        res.status(400).json({ message: 'Job does not exist' });
    }
    try{
        res.status(200).json(takeJob);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = getCompanyJobs;