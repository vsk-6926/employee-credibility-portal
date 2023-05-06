const express = require('express');
const router = express.Router();


const getJobs = require('../controller/JobController/ListAllJobController');
const createJob = require('../controller/JobController/CreateJobController');
const getCompanyJobs = require('../controller/JobController/ListJobController');

router.post('/all', getJobs);
router.post('/create', createJob);
router.post('/company', getCompanyJobs);

module.exports = router;

