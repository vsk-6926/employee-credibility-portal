const Job = require('../../models/Job');
const mongoose = require('mongoose');

const createJob = async (req, res) => {
    const job = req.body;
    const newJob = new Job({
        id : new mongoose.Types.ObjectId(),
        title: job.title,
        description: job.description,
        company: job.company,
        location: job.location,
        salary: job.salary,
    });
    try {
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = createJob;

