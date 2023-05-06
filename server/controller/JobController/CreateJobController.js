const Job = require('../../models/Job');

const createJob = async (req, res) => {
    const job = req.body;
    const newJob = new Job({
        id : new mongoose.Types.ObjectId(),
        title: job.title,
        description: job.description,
        company: job.company,
        status: job.status,
        location: job.location,
        salary: job.salary,
        requirements: job.requirements,
    });
    try {
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}

module.exports = createJob;

