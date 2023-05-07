const express = require('express');
const router = express.Router();


const getJobs = require('../controller/JobController/ListAllJobController');
const createJob = require('../controller/JobController/CreateJobController');
const getCompanyJobs = require('../controller/JobController/ListCompanyJobController');
const getJobDetails = require('../controller/JobController/getJobController');

router.post('/all', getJobs);
router.post('/create', createJob);
router.post('/company', getCompanyJobs);
router.post('/jobdetails',getJobDetails);

module.exports = router;

