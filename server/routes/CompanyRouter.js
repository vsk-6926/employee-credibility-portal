const express =  require('express');
const router = express.Router();

const Company = require('../models/Company');


const updateCompanyInfo = require('../controller/CompanyController/CUpdateCompanyInfo');



router.post('/update', updateCompanyInfo);

module.exports = router;

