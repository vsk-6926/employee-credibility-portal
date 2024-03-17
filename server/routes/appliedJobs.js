const express = require('express');
const router = express.Router();
const { createAppliedJob} = require('../controller/AppliedJobs/appliedJobsCreate');
const { updateAppliedJob } = require('../controller/AppliedJobs/appliedJobsUpdate');
const { getAppliedJobs } = require('../controller/AppliedJobs/appliedJobsGet');

// Create a new applied job
router.post('/create', createAppliedJob);
router.put('/update',updateAppliedJob);
router.post("/get",getAppliedJobs);

module.exports = router;